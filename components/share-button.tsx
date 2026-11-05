"use client";

type ShareButtonProps = {
  title: string;
  text: string;
  className?: string;
  candidateId?: string;
};

export default function ShareButton({
  title,
  text,
  className = "share-button",
  candidateId,
}: ShareButtonProps) {
  const share = async () => {
    const url = new URL(window.location.href);
    url.hash = candidateId ? `candidate-${candidateId}` : "";
    const shareUrl = url.toString();
    const shareData = { title, text, url: shareUrl };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
      }
    }

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      `${text}\n${shareUrl}`,
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button className={className} type="button" onClick={share}>
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 16V4m0 0L7 9m5-5 5 5M5 14v5h14v-5" />
      </svg>
      <span>مشاركة</span>
    </button>
  );
}
