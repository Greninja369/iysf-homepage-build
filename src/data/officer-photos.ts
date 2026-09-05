/* Approved officer headshots. Keys are the names rendered in the UI;
   any name without an entry falls back to the initials placeholder. */
import mritunjay from "../assets/Mritunjay.jpg";
import sebastien from "../assets/Sebastien_Bonnet-300x244.jpg";
import ainslie from "../assets/Ainslie_Faust-300x244.jpg";
import iveta from "../assets/Iveta_Kalnina-300x244.jpg";
import roberto from "../assets/Roberto-Vanin-e1683448379887.png";
import raj from "../assets/Raj-Bhasvar.png";
import kimTang from "../assets/international-coaches/kim-tang1.jpg";
import brandyLyn from "../assets/international-coaches/brandy-lyn1.jpg";
import zebHomison from "../assets/international-coaches/zeb-homison1.jpg";
import almaniaColombo from "../assets/international-coaches/almania1.jpg";
import candiceNoble from "../assets/international-coaches/CandiceNoble1.jpg";
import delfinaBo from "../assets/international-coaches/delfina-bo1-1.jpg";
import jindriskaKrivankova from "../assets/international-coaches/Jindriska1.jpg";
import mareikeTross from "../assets/international-coaches/Mareike-Tross1.jpg";
import zuzanaDrapalikova from "../assets/international-coaches/ZuzanaDrapalikova.jpg";
import hanaPersson from "../assets/international-coaches/hana-persson.jpg";
import erikPersson from "../assets/international-coaches/erik-persson.jpg";
import lynnWhitlow from "../assets/international-judges/lynn-whitlow-300x300.jpeg";
import judgeTereza from "../assets/international-judges/tc-tereza.jpg";
import judgeRajashree from "../assets/international-judges/rajashree.jpeg";
import umangDawn from "../assets/international-judges/umang.jpeg";
import judgeAdrian from "../assets/international-judges/AdrianAlarcon1.jpg";
import cintraBrown from "../assets/international-judges/Cintra.jpg";
import amyKreminski from "../assets/international-judges/Amy-Kreminsky-scaled.jpg";
import annLeonard from "../assets/international-judges/Ann.jpg";
import baGoddard from "../assets/international-judges/BA.jpg";
import judgeChristian from "../assets/international-judges/Christian.jpg";
import cynthiaWehr from "../assets/international-judges/Cynthia.jpg";
import danaVasilescuHenry from "../assets/international-judges/Dana.jpg";
import davideToneguzzi from "../assets/international-judges/Davide.jpg";
import suryaBahadurKarki from "../assets/international-judges/Dr.-Karki-New-photo.jpg";
import elizabethWalunas from "../assets/international-judges/Elizabeth.jpg";
import erinPaulsen from "../assets/international-judges/Erin-Paulsen-.jpg";
import janaDohnalova from "../assets/international-judges/Jana-Dohnalova.jpg";
import jeanAgress from "../assets/international-judges/Jean-Agress.jpg";
import joannePrzystawka from "../assets/international-judges/joanne.png";
import xiangLi from "../assets/international-judges/Li-Xiang.jpg";
import lydiaWright from "../assets/international-judges/Lydia.jpg";
import mandeepKaurSandhu from "../assets/international-judges/Mandeep-Kaur-Sandhu-IYSF.jpg";
import pabloDiVita from "../assets/international-judges/Pablo.jpg";
import qiaoJudyLu from "../assets/international-judges/Qiao-Lu.jpg";
import sangramPuri from "../assets/international-judges/Sangram.jpg";
import selayMariusKouassi from "../assets/international-judges/Selay.jpg";
import judgeTrine from "../assets/international-judges/Trine-scaled.jpg";
import yalguunMunkhjoloo from "../assets/international-judges/yalguun.jpeg";
import dipaPanday from "../assets/international-judges/DipaPanday.jpg";
import zuzanaHadravova from "../assets/international-judges/Zuzana-scaled.jpg";
import marynaSurkova from "../assets/international-judges/maryna-surkova.jpeg";
import anandaGahire from "../assets/international-judges/Ananda-Gahire-1.jpg";
import florenciaHanon from "../assets/international-judges/FlorenciaHanon.jpg";
import imeldaTurner from "../assets/international-judges/Imelda-Turner.jpg";

export const OFFICER_PHOTOS: Record<string, string> = {
  "Mritunjay Kumar Pandey": mritunjay,
  "Sebastien Bonnet": sebastien,
  "Ainslie Faust": ainslie,
  "Iveta Kalnina": iveta,
  "Roberto Vanin": roberto,
  "Raj Bhasvar": raj,
  "Kim Tang": kimTang,
  "Brandy Lyn": brandyLyn,
  "Zeb Homison": zebHomison,
  "Almania Colombo": almaniaColombo,
  "Candice Noble": candiceNoble,
  "Delfina Bo": delfinaBo,
  "Jindriska Krivankova": jindriskaKrivankova,
  "Mareike Tross": mareikeTross,
  "Zuzana Drapalikova": zuzanaDrapalikova,
  "Hana Persson": hanaPersson,
  "Erik Persson": erikPersson,
  "Lynn Whitlow": lynnWhitlow,
  "Tereza Bonnet-Šenková": judgeTereza,
  "Rajashree Choudhury": judgeRajashree,
  "Umang Dawn": umangDawn,
  "Adrian Alarcon": judgeAdrian,
  "Cintra Brown": cintraBrown,
  "Amy Kreminski": amyKreminski,
  "Ann Leonard": annLeonard,
  "BA Goddard": baGoddard,
  "Christian Scaraglino": judgeChristian,
  "Cynthia Wehr": cynthiaWehr,
  "Dana Vasilescu Henry": danaVasilescuHenry,
  "Davide Toneguzzi": davideToneguzzi,
  "Surya Bahadur Karki": suryaBahadurKarki,
  "Elizabeth Walunas": elizabethWalunas,
  "Erin Paulsen": erinPaulsen,
  "Jana Dohnalova": janaDohnalova,
  "Jean Agress": jeanAgress,
  "Joanne Przystawka": joannePrzystawka,
  "Xiang Li": xiangLi,
  "Lydia Wright": lydiaWright,
  "Mandeep Kaur Sandhu": mandeepKaurSandhu,
  "Pablo DiVita": pabloDiVita,
  "Qiao-Judy Lu": qiaoJudyLu,
  "Sangram Puri": sangramPuri,
  "Selay Marius Kouassi": selayMariusKouassi,
  "Trine Zafina Søndergaard": judgeTrine,
  "Yalguun Munkhjoloo": yalguunMunkhjoloo,
  "Dipa Panday": dipaPanday,
  "Zuzana Hadravová": zuzanaHadravova,
  "Maryna Surkova": marynaSurkova,
  "Ananda Gahire": anandaGahire,
  "Florencia Hanon": florenciaHanon,
  "Imelda Turner": imeldaTurner,
};

export function photoFor(name: string): string | undefined {
  return OFFICER_PHOTOS[name.replace(/^Dr\.\s*/, "").trim()] ?? OFFICER_PHOTOS[name];
}
