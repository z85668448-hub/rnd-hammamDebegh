import Image from "next/image";
import CandidateGrid from "@/components/candidate-grid";
import ShareButton from "@/components/share-button";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { candidates } from "@/data/candidates";

export default function Home() {
  return (
    <>
      <div className="splash" aria-label="شعار التجمع الوطني الديمقراطي">
        <div className="splash-mark">
          <Image
            className="splash-logo"
            src="/images/rnd-logo.jpg"
            alt="شعار التجمع الوطني الديمقراطي: انتخب رقم 2"
            width={768}
            height={768}
            priority
          />
          <p className="splash-caption">قائمة بلدية حمام دباغ</p>
        </div>
      </div>

      <div className="site-shell" id="top">
        <SiteHeader />
        <main className="page-main">
          <section aria-labelledby="page-title">
            <div className="campaign-intro">
              <div>
                <p className="campaign-kicker">معًا لخدمة بلدية حمام دباغ</p>
                <h1 id="page-title">قائمة المترشحين</h1>
                <p className="campaign-description">
                  التجمع الوطني الديمقراطي · بلدية حمام دباغ · ولاية قالمة
                </p>
              </div>
              <div className="intro-actions">
                <span className="list-count">
                  <strong>{candidates.length}</strong>
                  <span>مترشحًا</span>
                </span>
                <ShareButton
                  className="share-button share-button-list"
                  title="قائمة مترشحي التجمع الوطني الديمقراطي"
                  text="تعرّف على قائمة مترشحي التجمع الوطني الديمقراطي لبلدية حمام دباغ"
                />
              </div>
            </div>
            <CandidateGrid candidates={candidates} />
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
