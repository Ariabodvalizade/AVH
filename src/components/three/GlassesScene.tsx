"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Scroll-driven wireframe stand-in for the AVH Lens model. Loaded only through
 * `next/dynamic({ ssr:false })` from the glasses page, so `three` stays out of
 * the shared bundle.
 *
 * Drawn as clean single-stroke line loops rather than mesh wireframes — a
 * wireframed solid reads as noise at this scale. The frame is paper; kodak is
 * spent on one element only (the scan arc), keeping the accent inside its 10%
 * budget even though the model owns the viewport.
 *
 * Swap for GLTFLoader + a Draco/meshopt GLB when the real model lands, and
 * traverse gltf.scene to configure materials rather than adding it directly.
 *
 * `progress` is 0→1 across the pinned section and drives camera + rotation.
 */

/** Circle as an explicit point ring, so it draws as one continuous stroke. */
function ring(radius: number, segments = 96) {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i <= segments; i++) {
    const a = (i / segments) * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, 0));
  }
  return new THREE.BufferGeometry().setFromPoints(pts);
}

function arc(radius: number, from: number, to: number, segments = 48) {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i <= segments; i++) {
    const a = from + (i / segments) * (to - from);
    pts.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, 0));
  }
  return new THREE.BufferGeometry().setFromPoints(pts);
}

export default function GlassesScene({ progress }: { progress: number }) {
  const host = useRef<HTMLDivElement>(null);
  const target = useRef(progress);
  target.current = progress;

  useEffect(() => {
    const el = host.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    // antialias can only be set at construction — assigning it later has no effect
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const canvas = renderer.domElement;
    canvas.setAttribute("role", "img");
    canvas.setAttribute(
      "aria-label",
      "نمای سه‌بعدی عینک واقعیت افزودهٔ AVH — با اسکرول می‌چرخد."
    );
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    el.appendChild(canvas);

    const frameMat = new THREE.LineBasicMaterial({
      color: 0xf5f5f0,
      transparent: true,
      opacity: 0.75,
    });
    const softMat = new THREE.LineBasicMaterial({
      color: 0xf5f5f0,
      transparent: true,
      opacity: 0.22,
    });
    const kodakMat = new THREE.LineBasicMaterial({ color: 0xffb800, transparent: true, opacity: 1 });

    const geos: THREE.BufferGeometry[] = [];
    const rig = new THREE.Group();

    // دو عدسی
    for (const x of [-0.78, 0.78]) {
      const outer = ring(0.62);
      const inner = ring(0.5);
      geos.push(outer, inner);

      const o = new THREE.Line(outer, frameMat);
      const iL = new THREE.Line(inner, softMat);
      o.position.x = x;
      iL.position.x = x;
      rig.add(o, iL);
    }

    // پل و دسته‌ها
    const seg = (a: THREE.Vector3, b: THREE.Vector3) => {
      const g = new THREE.BufferGeometry().setFromPoints([a, b]);
      geos.push(g);
      return new THREE.Line(g, frameMat);
    };
    rig.add(seg(new THREE.Vector3(-0.16, 0.06, 0), new THREE.Vector3(0.16, 0.06, 0)));
    for (const s of [-1, 1]) {
      rig.add(
        seg(new THREE.Vector3(s * 1.4, 0.12, 0), new THREE.Vector3(s * 1.62, 0.1, -1.25)),
        seg(new THREE.Vector3(s * 1.62, 0.1, -1.25), new THREE.Vector3(s * 1.58, -0.14, -1.55))
      );
    }

    // تنها عنصر کداک: کمانِ اسکن که با پیشرفت اسکرول می‌چرخد
    const scanGeo = arc(0.7, 0, Math.PI * 0.42);
    geos.push(scanGeo);
    const scan = new THREE.Line(scanGeo, kodakMat);
    scan.position.x = 0.78;
    rig.add(scan);

    scene.add(rig);

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = el;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    let raf = 0;
    let eased = target.current;

    const draw = () => {
      eased += (target.current - eased) * 0.08;
      const p = reduced ? target.current : eased;

      rig.rotation.y = -0.75 + p * 1.7;
      rig.rotation.x = 0.2 - p * 0.3;
      scan.rotation.z = p * Math.PI * 2;
      camera.position.set(0, 0.05, 5.0 - p * 1.4);
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      geos.forEach((g) => g.dispose());
      frameMat.dispose();
      softMat.dispose();
      kodakMat.dispose();
      renderer.dispose();
      canvas.remove();
    };
  }, []);

  return <div ref={host} className="size-full" />;
}
