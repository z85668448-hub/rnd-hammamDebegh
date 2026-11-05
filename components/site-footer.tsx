import ShareButton from "@/components/share-button";
import { campaign } from "@/data/campaign";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-identity">
        <strong>{campaign.partyName}</strong>
        <span>قائمة {campaign.municipality} · {campaign.province}</span>
      </div>
      <div className="footer-contact">
        {campaign.phone || campaign.email ? (
          <div className="footer-links">
            {campaign.phone && <a href={`tel:${campaign.phone}`}>{campaign.phone}</a>}
            {campaign.email && <a href={`mailto:${campaign.email}`}>{campaign.email}</a>}
          </div>
        ) : (
          <span>بيانات التواصل تُضاف قريبًا.</span>
        )}
        {campaign.socialLinks.length > 0 ? (
          <nav className="footer-links" aria-label="صفحات التواصل الاجتماعي">
            {campaign.socialLinks.map((link) => (
              <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </nav>
        ) : (
          <span>روابط التواصل الاجتماعي تُضاف قريبًا.</span>
        )}
      </div>
      <ShareButton
        className="share-button share-button-footer"
        title="قائمة مترشحي التجمع الوطني الديمقراطي"
        text="قائمة مترشحي التجمع الوطني الديمقراطي لبلدية حمام دباغ"
      />
    </footer>
  );
}
