import Image from "next/image";
import ShareButton from "@/components/share-button";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="التجمع الوطني الديمقراطي، حمام دباغ">
        <Image
          className="brand-logo"
          src="/images/rnd-logo.jpg"
          alt=""
          width={56}
          height={56}
          priority
        />
        <span className="brand-copy">
          <strong>التجمع الوطني الديمقراطي</strong>
          <span>قائمة بلدية حمام دباغ · قالمة</span>
        </span>
      </a>
      <nav className="header-actions" aria-label="التنقل الرئيسي">
        <a className="header-link" href="#candidates">المترشحون</a>
        <a className="header-link" href="#contact">حمام دباغ</a>
        <ShareButton
          className="share-button share-button-header"
          title="قائمة مترشحي التجمع الوطني الديمقراطي"
          text="قائمة مترشحي التجمع الوطني الديمقراطي لبلدية حمام دباغ"
        />
      </nav>
    </header>
  );
}
