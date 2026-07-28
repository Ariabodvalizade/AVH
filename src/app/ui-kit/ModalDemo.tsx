"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

export default function ModalDemo() {
  const [ink, setInk] = useState(false);
  const [paper, setPaper] = useState(false);

  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="hairline" onClick={() => setInk(true)}>
        مودال مشکی
      </Button>
      <Button variant="hairline" onClick={() => setPaper(true)}>
        مودال کاغذی
      </Button>

      <Modal open={ink} onClose={() => setInk(false)} title="نمایشگر سه‌بعدی آیتم">
        <p className="leading-[1.8] text-paper-70">
          سطح مشکی برای نمایشگر AR، پخش ویدیو و هر محتوایی که مدیا در آن اصل است.
          اسکریم ۶۰٪ + بلور، بستن با Esc یا کلیک بیرون.
        </p>
      </Modal>

      <Modal open={paper} onClose={() => setPaper(false)} title="تأیید ارسال" surface="paper">
        <p className="leading-[1.8]">
          سطح کاغذی برای فرم‌ها و متن خواندنی. کنتراست ۱۸:۱ برای متن فارسی.
        </p>
      </Modal>
    </div>
  );
}
