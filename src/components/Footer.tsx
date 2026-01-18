import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="font-display text-lg text-primary-foreground">T</span>
          <Heart className="w-4 h-4 text-wedding-rose" fill="currentColor" />
          <span className="font-display text-lg text-primary-foreground">H</span>
        </div>
        <p className="font-body text-sm text-primary-foreground/80">
          Cảm ơn bạn đã ghé thăm trang web của chúng tôi!
        </p>
        <p className="font-body text-xs text-primary-foreground/60 mt-2">
          Ngày 7 Tháng 2 Dương Lịch 2026 (âm lịch là ngày 20/12/2025)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
