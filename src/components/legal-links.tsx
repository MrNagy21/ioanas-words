import Link from "next/link";

export function ProfilePrivacyNotice() {
  return (
    <p className="profile-privacy-notice">
      Profilul se salvează în acest browser. Folosiți o poreclă sau un cod și
      protejați accesul la dispozitiv.{" "}
      <Link
        href="/ro/confidentialitate#profiluri"
        target="_blank"
        rel="noopener"
      >
        Cum sunt păstrate și șterse datele (filă nouă)
      </Link>
      .
    </p>
  );
}
