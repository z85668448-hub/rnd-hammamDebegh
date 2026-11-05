"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Candidate } from "@/data/candidates";
import ShareButton from "@/components/share-button";

function CandidateCard({
  candidate,
  onOpen,
}: {
  candidate: Candidate;
  onOpen: (candidate: Candidate) => void;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const displayName = candidate.nameAr ?? "سيُعلن عن الاسم قريبًا";

  return (
    <article className="candidate-card" id={`candidate-${candidate.id}`}>
      <button
        className="candidate-open"
        type="button"
        aria-label={`عرض التفاصيل: ${candidate.nameAr ?? `مترشح ${candidate.rank}`}`}
        onClick={() => onOpen(candidate)}
      >
        <span className="candidate-media" aria-hidden="true">
          {candidate.photo && !imageFailed ? (
            <>
              {!imageLoaded && <span className="candidate-skeleton" />}
              <Image
                className={`candidate-image${imageLoaded ? " is-loaded" : ""}`}
                src={candidate.photo}
                alt=""
                fill
                sizes="(max-width: 600px) 46vw, (max-width: 1099px) 31vw, 23vw"
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageFailed(true)}
              />
            </>
          ) : null}
        </span>
        <span className="candidate-ordinal" aria-hidden="true">
          {candidate.rank}
        </span>
        <span className="candidate-caption">
          <span className="candidate-label">مترشح {candidate.rank}</span>
          <span className="candidate-plus" aria-hidden="true">+</span>
        </span>
        <span className="candidate-name-preview">{displayName}</span>
      </button>
    </article>
  );
}

export default function CandidateGrid({
  candidates,
}: {
  candidates: Candidate[];
}) {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null,
  );
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openCandidate = useCallback((candidate: Candidate) => {
    setSelectedCandidate(candidate);
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  useEffect(() => {
    function openCandidateFromHash() {
      const id = window.location.hash.slice(1);
      const match = candidates.find((candidate) => `candidate-${candidate.id}` === id);
      if (match) openCandidate(match);
    }

    openCandidateFromHash();
    window.addEventListener("hashchange", openCandidateFromHash);
    return () => window.removeEventListener("hashchange", openCandidateFromHash);
  }, [candidates, openCandidate]);

  const handleDialogClose = () => {
    setSelectedCandidate(null);
    if (window.location.hash.startsWith("#candidate-")) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }
  };

  const handleDialogClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      dialogRef.current?.close();
    }
  };

  return (
    <>
      <div className="candidate-grid" aria-label="قائمة المترشحين">
        {candidates.map((candidate) => (
          <CandidateCard
            candidate={candidate}
            key={candidate.id}
            onOpen={openCandidate}
          />
        ))}
      </div>

      <dialog
        className="candidate-dialog"
        ref={dialogRef}
        aria-labelledby="candidate-dialog-title"
        onClose={handleDialogClose}
        onClick={handleDialogClick}
      >
        {selectedCandidate && (
          <div className="dialog-content" dir="rtl">
            <button
              className="dialog-close"
              type="button"
              aria-label="إغلاق التفاصيل"
              onClick={() => dialogRef.current?.close()}
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="dialog-photo">
              {selectedCandidate.photo ? (
                <Image
                  src={selectedCandidate.photo}
                  alt={selectedCandidate.nameAr ?? "صورة المترشح"}
                  fill
                  sizes="(max-width: 600px) 100vw, 480px"
                  className="dialog-image"
                />
              ) : (
                <span className="candidate-photo-placeholder">
                  <span className="placeholder-icon" />
                  <span>الصورة ستُضاف قريبًا</span>
                </span>
              )}
            </div>
            <div className="dialog-details">
              <p className="dialog-eyebrow">بلدية حمام دباغ · قالمة</p>
              <h2 id="candidate-dialog-title">
                {selectedCandidate.nameAr ?? "سيُعلن عن الاسم قريبًا"}
              </h2>
              <p className="dialog-rank">
                الترتيب في القائمة: {selectedCandidate.rank}
              </p>
              {selectedCandidate.bio && (
                <p className="dialog-bio">{selectedCandidate.bio}</p>
              )}
              <ShareButton
                className="share-button share-button-detail"
                title={selectedCandidate.nameAr ?? `مترشح ${selectedCandidate.rank}`}
                text={`تعرّف على مترشحي قائمة التجمع الوطني الديمقراطي لبلدية حمام دباغ: ${selectedCandidate.nameAr ?? `مترشح ${selectedCandidate.rank}`}`}
                candidateId={selectedCandidate.id}
              />
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
