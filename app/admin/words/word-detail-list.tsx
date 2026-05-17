"use client";

import Image from "next/image";
import {
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import type { ContentWord } from "@/content/types";

export function WordDetailList({
  emptyText,
  headingId,
  title,
  words,
}: Readonly<{
  emptyText: string;
  headingId: string;
  title: string;
  words: readonly ContentWord[];
}>) {
  const [selectedWord, setSelectedWord] = useState<ContentWord | null>(null);

  return (
    <section className="admin-word-list" aria-labelledby={headingId}>
      <div className="admin-word-list__header">
        <h4 id={headingId}>{title}</h4>
        <span aria-label={`${words.length} ${title} records`}>
          {words.length}
        </span>
      </div>

      {words.length > 0 ? (
        <ul
          aria-label={`${title} word records`}
          className="admin-word-list__rows"
        >
          {words.map((word) => (
            <li className="admin-word-row" key={word.id}>
              <button
                aria-haspopup="dialog"
                aria-label={`Open details for ${word.display}`}
                className="admin-word-row__button"
                onClick={() => setSelectedWord(word)}
                type="button"
              >
                <WordThumbnail size={48} word={word} />
                <span className="admin-word-row__body">
                  <span className="admin-word-row__title">
                    <strong>{word.display}</strong>
                    <code>{word.id}</code>
                  </span>
                  <span className="admin-word-row__meta">
                    <span>
                      <span className="admin-word-row__meta-label">
                        Category
                      </span>
                      <span>{word.category}</span>
                    </span>
                    <span>
                      <span className="admin-word-row__meta-label">
                        Difficulty
                      </span>
                      <span>{word.difficulty}</span>
                    </span>
                    <span>
                      <span className="admin-word-row__meta-label">Image</span>
                      <ImageStatusBadge status={word.imageStatus} />
                    </span>
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="admin-empty-state">{emptyText}</p>
      )}

      {selectedWord ? (
        <WordDetailDialog
          onClose={() => setSelectedWord(null)}
          word={selectedWord}
        />
      ) : null}
    </section>
  );
}

function WordDetailDialog({
  onClose,
  word,
}: Readonly<{
  onClose: () => void;
  word: ContentWord;
}>) {
  const modalRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const previouslyFocusedElement = document.activeElement;

    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      if (previouslyFocusedElement instanceof HTMLElement) {
        previouslyFocusedElement.focus();
      }
    };
  }, [onClose]);

  function closeFromBackdrop(event: ReactMouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  function trapFocus(event: ReactKeyboardEvent<HTMLElement>) {
    if (event.key !== "Tab" || !modalRef.current) {
      return;
    }

    const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    if (focusableElements.length === 0) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  return (
    <div
      className="admin-detail-backdrop"
      onMouseDown={closeFromBackdrop}
      role="presentation"
    >
      <section
        aria-labelledby="admin-word-detail-title"
        aria-modal="true"
        className="admin-detail-modal"
        onKeyDown={trapFocus}
        ref={modalRef}
        role="dialog"
      >
        <header className="admin-detail-modal__header">
          <div>
            <p className="admin-eyebrow">Word record</p>
            <h2 id="admin-word-detail-title">{word.display}</h2>
          </div>
          <button
            aria-label="Close word details"
            className="admin-detail-modal__close"
            onClick={onClose}
            ref={closeButtonRef}
            type="button"
          >
            x
          </button>
        </header>

        <div className="admin-detail-modal__content">
          <div className="admin-detail-modal__image">
            <WordThumbnail size={224} word={word} />
          </div>

          <dl className="admin-detail-grid">
            <DetailField label="ID" value={word.id} valueKind="code" />
            <DetailField label="Word" value={word.word} />
            <DetailField label="Display" value={word.display} />
            <DetailField label="Normalized" value={word.normalized} />
            <DetailField label="Part of speech" value={word.partOfSpeech} />
            <DetailField label="Difficulty" value={word.difficulty} />
            <DetailField label="Age band" value={word.ageBand} />
            <DetailField label="Category" value={word.category} />
            <DetailField
              label="Image path"
              value={word.image}
              valueKind="code"
            />
            <DetailField label="Image status" value={word.imageStatus} />
            <DetailField label="Alt text" value={word.alt} />
            <DetailField label="Source" value={word.source.join(", ")} />
            <DetailField label="License" value={word.license} />
            <DetailField label="Status" value={word.status} />
          </dl>
        </div>
      </section>
    </div>
  );
}

function DetailField({
  label,
  value,
  valueKind = "text",
}: Readonly<{
  label: string;
  value: number | string;
  valueKind?: "code" | "text";
}>) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{valueKind === "code" ? <code>{value}</code> : value}</dd>
    </div>
  );
}

function WordThumbnail({
  size,
  word,
}: Readonly<{ size: number; word: ContentWord }>) {
  if (word.imageStatus === "ready") {
    return (
      <Image
        alt={`Ready image thumbnail: ${word.alt}`}
        className="admin-word-thumb admin-word-thumb--ready"
        height={size}
        src={word.image}
        style={{ height: size, width: size }}
        title={word.image}
        unoptimized
        width={size}
      />
    );
  }

  return (
    <span
      aria-label={`Placeholder image for ${word.display}: ${word.alt}`}
      className="admin-word-thumb admin-word-thumb--placeholder"
      role="img"
      style={{ height: size, width: size }}
      title={word.image}
    >
      {word.display.slice(0, 1).toLocaleUpperCase("ro-RO")}
    </span>
  );
}

function ImageStatusBadge({
  status,
}: Readonly<{ status: ContentWord["imageStatus"] }>) {
  const label = status === "ready" ? "Ready image" : "Placeholder image";

  return (
    <span className={`admin-image-status admin-image-status--${status}`}>
      {label}
    </span>
  );
}
