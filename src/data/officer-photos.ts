/* Approved officer headshots. Keys are the names rendered in the UI;
   any name without an entry falls back to the initials placeholder. */
import rajashree from "../assets/Rajashree.jpg";
import mritunjay from "../assets/Mritunjay.jpg";
import christian from "../assets/Christian.jpg";
import adrian from "../assets/AdrianAlarcon1-300x300.jpg";
import sebastien from "../assets/Sebastien_Bonnet-300x244.jpg";
import ainslie from "../assets/Ainslie_Faust-300x244.jpg";
import iveta from "../assets/Iveta_Kalnina-300x244.jpg";
import tereza from "../assets/Tereza-300x242.jpg";
import roberto from "../assets/Roberto-Vanin-e1683448379887.png";
import trine from "../assets/Trine-Zafina-Sondergaard-300x226.jpg";
import raj from "../assets/Raj-Bhasvar.png";

export const OFFICER_PHOTOS: Record<string, string> = {
  "Rajashree Choudhury": rajashree,
  "Mritunjay Kumar Pandey": mritunjay,
  "Christian Scaraglino": christian,
  "Adrian Alarcon": adrian,
  "Sebastien Bonnet": sebastien,
  "Ainslie Faust": ainslie,
  "Iveta Kalnina": iveta,
  "Tereza Bonnet-Šenková": tereza,
  "Roberto Vanin": roberto,
  "Trine Zafina Søndergaard": trine,
  "Raj Bhasvar": raj,
};

export function photoFor(name: string): string | undefined {
  return OFFICER_PHOTOS[name.replace(/^Dr\.\s*/, "").trim()] ?? OFFICER_PHOTOS[name];
}
