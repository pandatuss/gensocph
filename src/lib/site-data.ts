import {
  BookOpen, Scale, Users, Briefcase, GraduationCap, Tv,
  Landmark, Sparkles, Heart, Globe, ShieldCheck, Gavel,
} from "lucide-react";

export const NAV_ITEMS = [
  { id: "home", label: "Home", to: "/" },
  { id: "history", label: "History", to: "/history" },
  { id: "gad", label: "GAD", to: "/gad" },
  { id: "family", label: "Family", to: "/family" },
  { id: "labor", label: "Labor", to: "/labor" },
  { id: "academe", label: "Academe", to: "/academe" },
  { id: "media", label: "Media", to: "/media" },
  { id: "laws", label: "Laws", to: "/laws" },
  { id: "interactive", label: "Interactive", to: "/interactive" },
  { id: "resources", label: "Resources", to: "/resources" },
  { id: "members", label: "Members", to: "/members" },
] as const;

export type MemberSocial = {
  platform: "facebook" | "email";
  href: string;
  label: string;
};

export type Member = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  accent: string;
  email: string;
  photo?: string;
  socials: MemberSocial[];
};

const ACCENTS = [
  "from-purple-400 to-indigo-500",
  "from-fuchsia-400 to-purple-500",
  "from-indigo-400 to-violet-500",
  "from-violet-400 to-purple-500",
  "from-purple-400 to-fuchsia-500",
  "from-indigo-400 to-purple-500",
  "from-fuchsia-400 to-indigo-500",
  "from-purple-400 to-violet-500",
  "from-indigo-400 to-fuchsia-500",
  "from-violet-400 to-indigo-500",
  "from-purple-400 to-indigo-400",
  "from-fuchsia-400 to-violet-500",
  "from-indigo-400 to-purple-400",
];

import carlJustinPhoto from "@/assets/members/carl-justin-juntilla.png";
import angelRoselynPhoto from "@/assets/members/angel-roselyn-cabanal.png";
import samSymonPhoto from "@/assets/members/sam-symon-gonzales.png";
import lalaineGracePhoto from "@/assets/members/lalaine-grace-tumagan.png";
import catherineEllishaPhoto from "@/assets/members/catherine-ellisha-bucud.png";
import jonalynHuganasPhoto from "@/assets/members/jonalyn-huganas.png";
import gladwynMagnoPhoto from "@/assets/members/gladwyn-magno.png";
import janaMikaelaPhoto from "@/assets/members/jana-mikaela-dulog.png";
import jaysonBauagPhoto from "@/assets/members/jayson-bauag.png";
import allyzaSalcedaPhoto from "@/assets/members/allyza-salceda.png";
import aeronMendezPhoto from "@/assets/members/aeron-mendez.png";
import carlOrdonezPhoto from "@/assets/members/carl-ordonez.png";
import boeDaradarPhoto from "@/assets/members/boe-daradar.png";

const MEMBER_PHOTOS: Record<string, string> = {
  "Carl Justin I. Juntilla": carlJustinPhoto,
  "Angel Roselyn H. Cabañal": angelRoselynPhoto,
  "Sam Symon S. Gonzales": samSymonPhoto,
  "Lalaine Grace V. Tumagan": lalaineGracePhoto,
  "Catherine Ellisha Lois T. Bucud": catherineEllishaPhoto,
  "Jonalyn R. Huganas": jonalynHuganasPhoto,
  "Gladwyn S. Magno": gladwynMagnoPhoto,
  "Jana Mikaela D. Dulog": janaMikaelaPhoto,
  "Jayson G. Bauag": jaysonBauagPhoto,
  "Allyza F. Salceda": allyzaSalcedaPhoto,
  "Aeron Joseph M. Mendez": aeronMendezPhoto,
  "Carl Jericho Q. Ordonez": carlOrdonezPhoto,
  "Boe Jzennan A. Daradar": boeDaradarPhoto,
};

const RAW_MEMBERS: Array<{ name: string; role: string; bio: string; facebook: string; email?: string }> = [
  { name: "Sam Symon S. Gonzales", role: "Project Leader / Content Researcher", bio: "Leads the team and authored the main heading on the homepage — Understanding Gender in the Philippines. Researches laws, bills, and policies about gender in the Philippines and the situation of gender violence.", facebook: "https://www.facebook.com/sam.gonzales.343040" },
  { name: "Carl Justin I. Juntilla", role: "Developer", bio: "Builds and maintains the platform — crafting the interactive experiences, motion, and infrastructure that bring every section to life. Develops responsive layouts, animations, and component systems accessible across all devices.", facebook: "https://www.facebook.com/carljustinjuntilla", email: "carljustin.juntilla@cvsu.edu.ph" },
  { name: "Angel Roselyn H. Cabañal", role: "Content Researcher", bio: "Researches the history of gender in the Philippines — from pre-colonial babaylan traditions and Spanish colonial patriarchy to American-era suffrage and modern LGBTQ+ movements.", facebook: "https://www.facebook.com/angelscott.h.cabanal" },
  { name: "Gladwyn S. Magno", role: "Content Researcher", bio: "Researches Gender and Development (GAD) in the Philippine context — exploring national policies, the Magna Carta of Women, GAD budgeting mandates, and how government agencies implement gender mainstreaming programs across the country.", facebook: "https://www.facebook.com/gladwyn.magno.2024" },
  { name: "Catherine Ellisha Lois T. Bucud", role: "Content Researcher", bio: "Researches gender in the Filipino family — examining traditional family structures, changing roles of mothers and fathers, solo parenthood, househusbands, and how economic pressures and migration reshape family gender dynamics.", facebook: "https://www.facebook.com/nerouo.r" },
  { name: "Jayson G. Bauag", role: "Content Researcher", bio: "Researches the status of gender in the Philippine labor market — covering wage gaps, occupational segregation, women in leadership, OFW gender dynamics, maternity leave policies, and workplace discrimination faced by women and LGBTQ+ workers.", facebook: "https://www.facebook.com/kurotacchi" },
  { name: "Boe Jzennan A. Daradar", role: "Content Researcher", bio: "Researches Gender and Development in the Philippine academe — examining CHED gender mainstreaming policies, GAD offices in state universities, curriculum integration of gender studies, and campus sexual harassment protocols.", facebook: "https://www.facebook.com/daradar.boe" },
  { name: "Lalaine Grace V. Tumagan", role: "Content Researcher", bio: "Researches the portrayal of gender in Philippine entertainment and mass media — analyzing stereotypes in teleseryes and films, LGBTQ+ representation, the rise of women-led productions.", facebook: "https://www.facebook.com/lalainegrace.tumagan203" },
  { name: "Jonalyn R. Huganas", role: "Content Researcher", bio: "Collects references and citations across the platform — gathering government data, academic journals, and NGO reports to ground every section in credible, traceable sources.", facebook: "https://www.facebook.com/jonalyn.huganas.5" },
  { name: "Allyza F. Salceda", role: "Content Researcher", bio: "Gathers and curates illustrations and photos from artists — collecting visuals that translate gender concepts into imagery honoring identity and LGBTQ+ lived experiences.", facebook: "https://www.facebook.com/allyza.salceda14" },
  { name: "Carl Jericho Q. Ordonez", role: "Content Researcher", bio: "Gathers and curates illustrations and photos from artists — collecting imagery that brings historical figures and everyday life through thoughtful visual storytelling.", facebook: "https://www.facebook.com/100066626202319" },
  { name: "Jana Mikaela D. Dulog", role: "Content Researcher", bio: "Designs interactive content for the platform — crafting quizzes, and learning experiences that turn research into engaging activities for students and educators.", facebook: "https://www.facebook.com/dulog.jana" },
  { name: "Aeron Joseph M. Mendez", role: "Content Researcher", bio: "Designs interactive content for the platform — building scenarios that invite users to reflect on gender issues and apply learnings to real-world Filipino contexts.", facebook: "https://www.facebook.com/aeron22.2222222222222222222222" },
];

function initialsOf(name: string) {
  return name
    .replace(/\./g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .filter((p) => /^[A-Z]/.test(p))
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export const MEMBERS: Member[] = RAW_MEMBERS.map((m, i) => {
  const socials: MemberSocial[] = [
    { platform: "facebook", href: m.facebook, label: "Facebook" },
    { platform: "email", href: `mailto:${m.email ?? "gad@cvsu.edu.ph"}`, label: "Email" },
  ];
  return {
    name: m.name,
    role: m.role,
    bio: m.bio,
    initials: initialsOf(m.name),
    accent: ACCENTS[i % ACCENTS.length],
    email: m.email ?? "gad@cvsu.edu.ph",
    photo: MEMBER_PHOTOS[m.name],
    socials,
  };
});

export const HERO_STATS = [
  { value: "500+", label: "Educational Resources", icon: BookOpen },
  { value: "7", label: "Major Learning Sections", icon: Sparkles },
  { value: "20+", label: "Gender Laws & Policies", icon: Scale },
  { value: "∞", label: "Interactive Experiences", icon: Heart },
];

export const TIMELINE = [
  {
    era: "Pre-Colonial Philippines",
    years: "Before 1565",
    body: "Before the arrival of the Spanish, indigenous communities practiced relatively equal and flexible gender roles. Women were respected members of society who could inherit property, participate in trade, and even lead communities. The babaylan — spiritual leaders and healers — were mostly women, though some men also performed the role by dressing and acting in feminine ways, showing early acceptance of diverse gender expression. Family systems were often bilateral, with inheritance and lineage coming from both mother and father, giving women equal importance within the family and community.",
  },
  {
    era: "Spanish Colonial Period",
    years: "1565 – 1898",
    body: "Spanish colonizers introduced Catholic beliefs and patriarchal values that emphasized male authority and female obedience. Women were expected to be modest, religious, and focused on household responsibilities. The Catholic Church strongly influenced how society viewed masculinity and femininity, and indigenous practices like the babaylan traditions were discouraged or suppressed. Education for women was limited to religion, proper behavior, and household skills. Despite these restrictions, many Filipino women still became active in society and participated in revolutionary movements — most notably Gabriela Silang, who became a symbol of bravery and resistance.",
  },
  {
    era: "American Colonial Period",
    years: "1898 – 1946",
    body: "The Americans introduced a public education system that allowed more Filipino women to attend schools and universities. Women entered professions such as teaching, nursing, and public service in growing numbers. Ideas about democracy and civil rights became more widespread, and women's suffrage movements actively campaigned for the right to vote. In 1937, Filipino women officially gained the right to vote through a national plebiscite — one of the earliest in Asia. This period marked a major step in changing the role of women, although traditional expectations regarding marriage and motherhood still remained strong.",
  },
  {
    era: "Post-Independence",
    years: "1946 – 1972",
    body: "After independence in 1946, women continued expanding their participation in education, business, media, and government. Gender roles slowly changed as more women became active in public life. Women entered politics and the professions in greater numbers, and early women's organizations advocated for legal and economic reform. The foundations were being laid for a more inclusive society, even as traditional norms continued to shape expectations in many areas of life.",
  },
  {
    era: "Martial Law Period",
    years: "1972 – 1986",
    body: "Despite repression, women led grassroots movements fighting for democracy and human rights. Female journalists, students, and activists helped challenge traditional expectations about women's roles in society. GABRIELA was founded in 1984, laying the groundwork for the post-EDSA gender agenda. In 1986, Corazon Aquino became the first female president in Asia — an important symbol of women's leadership and political participation in the Philippines. Her presidency inspired a new generation of women to engage in public life and advocacy.",
  },
  {
    era: "Contemporary Philippines",
    years: "1987 – Present",
    body: "From the 1990s onward, discussions expanded beyond women's rights to include gender equality, gender identity, sexual orientation, and LGBTQ+ rights. The Magna Carta of Women (Republic Act No. 9710, enacted in 2009) aims to protect and promote women's rights in education, employment, and governance. Modern influences such as feminism, social media, globalization, and youth activism have shaped public understanding of gender. LGBTQ+ communities have become more visible through Pride marches, anti-discrimination campaigns, and media representation. Today, gender is understood as influenced not only by biology but also by culture, identity, and personal expression — though challenges such as discrimination and violence still persist.",
  },
];

export const HISTORY_INTRO = `The concept of gender in the Philippines has changed throughout history because of social, cultural, political, and religious influences. From the more flexible gender roles during the pre-colonial period to the growing movements for gender equality and LGBTQ+ rights today, the understanding of gender in the country has continuously evolved. In modern society, gender is no longer viewed only in terms of biological differences between men and women, but also as a social and cultural identity connected to rights, equality, and self-expression.`;

export const HISTORY_EVOLUTION = [
  "Pre-colonial societies practiced relatively flexible and cooperative gender roles.",
  "Spanish colonization introduced patriarchal and conservative beliefs about gender.",
  "The American period expanded women's access to education and professional opportunities.",
  "Modern Philippine society continues to advocate for gender equality, inclusivity, and human rights.",
];

export const HISTORY_CONCLUSION = `Today, the Philippines continues to balance traditional cultural values with modern perspectives on gender and equality. The history of gender in the country reflects both cultural change and the ongoing struggle for equal rights and social acceptance.`;

export const GAD_TIMELINE = [
  { year: "1987", title: "Philippine Constitution", body: "Recognizes the role of women in nation-building and ensures fundamental equality before the law." },
  { year: "1992", title: "RA 7192", body: "Women in Development and Nation-Building Act mandates women's full integration in development." },
  { year: "1995", title: "Beijing Platform", body: "Philippines commits to the global Beijing Declaration and Platform for Action." },
  { year: "2009", title: "Magna Carta of Women", body: "RA 9710 — comprehensive women's human rights law translating CEDAW into local policy." },
  { year: "Today", title: "GAD Mainstreaming", body: "Every government agency allocates at least 5% of its budget to gender and development programs." },
];

export const LAWS = [
  { name: "Magna Carta of Women", code: "RA 9710", year: 2009, tag: "Rights", desc: "Comprehensive bill of rights for Filipino women, especially those in the marginalized sector.", icon: ShieldCheck },
  { name: "Anti-VAWC Act", code: "RA 9262", year: 2004, tag: "Protection", desc: "Anti-Violence Against Women and Their Children Act — defines and penalizes physical, sexual, psychological, and economic abuse.", icon: Heart },
  { name: "Safe Spaces Act", code: "RA 11313", year: 2019, tag: "Protection", desc: "The 'Bawal Bastos' law penalizes gender-based sexual harassment in streets, public spaces, workplaces, schools, and online.", icon: Globe },
  { name: "Anti-Sexual Harassment Act", code: "RA 7877", year: 1995, tag: "Workplace", desc: "Declares all forms of sexual harassment in employment, education, and training unlawful.", icon: Briefcase },
  { name: "Anti-Trafficking Act", code: "RA 9208 / RA 10364", year: 2003, tag: "Protection", desc: "Institutes policies to eliminate trafficking in persons, especially women and children.", icon: Gavel },
  { name: "Expanded Maternity Leave", code: "RA 11210", year: 2019, tag: "Workplace", desc: "Grants 105 days paid maternity leave, with an additional 15 days for solo parents.", icon: Users },
  { name: "Anti-Rape Law", code: "RA 8353", year: 1997, tag: "Protection", desc: "Reclassifies rape as a crime against persons and recognizes marital rape." , icon: Scale },
  { name: "Solo Parents' Welfare Act", code: "RA 11861", year: 2022, tag: "Family", desc: "Strengthens benefits, protections, and welfare for solo parents and their children.", icon: Heart },
];

export const FUN_FACTS = [
  "Filipino women won the right to vote in 1937 — earlier than many Western nations.",
  "Pre-colonial babaylan were often women or feminine men who served as spiritual leaders.",
  "The Philippines consistently ranks #1 in Southeast Asia in the WEF Global Gender Gap Index.",
  "The Magna Carta of Women (RA 9710) is the local translation of the UN's CEDAW.",
  "Every Philippine government agency must allocate at least 5% of its budget to GAD programs.",
  "RA 11313 'Safe Spaces Act' covers catcalling, wolf-whistling, and online harassment.",
  "Corazon Aquino was Asia's first female president, inaugurated in 1986.",
  "Filipino kinship is bilateral — children inherit and trace lineage from both parents.",
  "The 1987 Constitution explicitly recognizes 'the fundamental equality before the law of women and men.'",
  "OFW remittances are disproportionately sent home by women in care and domestic work.",
];

export const QUIZ_SETS = [

  [
    { q: "Which Philippine law is known as the Magna Carta of Women?", options: ["RA 9262", "RA 9710", "RA 11313", "RA 7877"], correct: 1 },
    { q: "In what year did Filipino women gain the right to vote?", options: ["1898", "1916", "1937", "1946"], correct: 2 },
    { q: "What were female spiritual leaders in pre-colonial Philippines called?", options: ["Datu", "Babaylan", "Lakan", "Maharlika"], correct: 1 },
    { q: "What does GAD stand for in Philippine policy?", options: ["Gender and Development", "Gender Advocacy Department", "General Advancement Division", "Gender Action Directive"], correct: 0 },
    { q: "What is the minimum % of an agency's budget allotted to GAD programs?", options: ["1%", "3%", "5%", "10%"], correct: 2 },
    { q: "Which law is popularly known as the 'Bawal Bastos' law?", options: ["RA 9262", "RA 11313", "RA 8353", "RA 9208"], correct: 1 },
    { q: "Which colonial influence introduced the 'Maria Clara' archetype?", options: ["American", "Japanese", "Spanish", "Chinese"], correct: 2 },
    { q: "How many paid days does the Expanded Maternity Leave Law grant?", options: ["60 days", "78 days", "105 days", "120 days"], correct: 2 },
    { q: "Who became Asia's first female president?", options: ["Gloria Macapagal-Arroyo", "Imelda Marcos", "Corazon Aquino", "Leni Robredo"], correct: 2 },
    { q: "Which law penalizes violence against women and their children?", options: ["RA 9262", "RA 9710", "RA 7877", "RA 8353"], correct: 0 },
  ],

  [
    { q: "Who led the longest sustained Filipino revolt against Spain after her husband's death?", options: ["Tandang Sora", "Gabriela Silang", "Teresa Magbanua", "Trinidad Tecson"], correct: 1 },
    { q: "Who is known as the 'Mother of the Katipunan'?", options: ["Gregoria de Jesus", "Melchora Aquino", "Marcela Agoncillo", "Josefa Llanes Escoda"], correct: 1 },
    { q: "Who was the first Filipina senator, elected in 1947?", options: ["Geronima Pecson", "Eva Estrada Kalaw", "Tecla San Andres Ziga", "Helena Benitez"], correct: 0 },
    { q: "Who was the first female Chief Justice of the Philippine Supreme Court?", options: ["Lourdes Sereno", "Teresita de Castro", "Estela Perlas-Bernabe", "Marivic Leonen"], correct: 0 },
    { q: "Who was the first Filipino Olympic gold medalist?", options: ["Margielyn Didal", "Nesthy Petecio", "Hidilyn Diaz", "Carlos Yulo"], correct: 2 },
    { q: "In what year did the women's suffrage plebiscite take place?", options: ["1935", "1937", "1941", "1946"], correct: 1 },
    { q: "How many YES votes were needed for women's suffrage in 1937?", options: ["100,000", "200,000", "300,000", "500,000"], correct: 2 },
    { q: "Who served as Vice President of the Philippines from 2016 to 2022?", options: ["Sara Duterte", "Leni Robredo", "Loren Legarda", "Risa Hontiveros"], correct: 1 },
    { q: "Which suffragist helped organize the early women's vote movement?", options: ["Pura Villanueva Kalaw", "Concepcion Felix", "Sofia de Veyra", "All of the above"], correct: 3 },
    { q: "Miriam Defensor Santiago was elected in 2011 to which international body?", options: ["UN Human Rights Council", "International Criminal Court", "ICJ", "ASEAN Court"], correct: 1 },
  ],

  [
    { q: "What is the Tagalog third-person pronoun 'siya'?", options: ["Masculine", "Feminine", "Gender-neutral", "Plural"], correct: 2 },
    { q: "What does 'asawa' mean in Filipino?", options: ["Wife only", "Husband only", "Spouse (gender-neutral)", "Partner-in-law"], correct: 2 },
    { q: "Which pre-colonial deity is associated with fertility and often depicted as transgender?", options: ["Bathala", "Lakapati", "Mayari", "Apolaki"], correct: 1 },
    { q: "What term describes Visayan feminine male spiritual leaders?", options: ["Asog", "Datu", "Lakan", "Panday"], correct: 0 },
    { q: "The 'bakla' identity predates which Western framework?", options: ["LGBT labels", "Suffrage movement", "Feminism", "Colonialism"], correct: 0 },
    { q: "Pre-colonial Filipino families traced lineage through:", options: ["Father's line only", "Mother's line only", "Both parents (bilateral)", "Eldest sibling"], correct: 2 },
    { q: "What phrase describes the woman as the 'light of the home'?", options: ["Ilaw ng tahanan", "Haligi ng tahanan", "Reyna ng bahay", "Inay ng bayan"], correct: 0 },
    { q: "Which figure is the colonial ideal of demure femininity?", options: ["Gabriela", "Maria Clara", "Sisa", "Salome"], correct: 1 },
    { q: "Which entertainer is a mainstream queer icon in Philippine TV?", options: ["Vice Ganda", "Boy Abunda", "Eat Bulaga hosts", "Coco Martin"], correct: 0 },
    { q: "Which Tagalog kinship term is gender-neutral by default?", options: ["Kapatid", "Ate", "Kuya", "Pamangkin (also neutral)"], correct: 0 },
  ],

  [
    { q: "RA 9262 protects women and children from:", options: ["Tax abuse", "Violence (physical, sexual, psychological, economic)", "Identity theft", "Cyberbullying only"], correct: 1 },
    { q: "RA 7877 covers sexual harassment in:", options: ["Public transport only", "Workplaces and schools", "Government only", "Private homes"], correct: 1 },
    { q: "RA 8353 reclassified rape as a crime against:", options: ["Chastity", "Persons", "Honor", "Property"], correct: 1 },
    { q: "RA 11648 raised the age of sexual consent to:", options: ["14", "15", "16", "18"], correct: 2 },
    { q: "RA 11313's Safe Spaces Act criminalizes:", options: ["Catcalling", "Wolf-whistling", "Online harassment", "All of the above"], correct: 3 },
    { q: "RA 9208 addresses:", options: ["Anti-trafficking in persons", "Maternity leave", "Domestic workers", "Solo parents"], correct: 0 },
    { q: "RA 9775 protects children from:", options: ["Online gaming", "Child pornography", "Child labor", "School bullying"], correct: 1 },
    { q: "What is required in every barangay to address VAW?", options: ["Police outpost", "VAWC Desk", "Health clinic", "Day care"], correct: 1 },
    { q: "Which government body leads women's empowerment policy?", options: ["DSWD", "PCW (Philippine Commission on Women)", "CHR", "PNP-WCPC"], correct: 1 },
    { q: "Cyberstalking under the Safe Spaces Act is considered:", options: ["A misdemeanor only", "Gender-based online sexual harassment", "Civil offense", "Not covered"], correct: 1 },
  ],

  [
    { q: "Roughly what % of OFWs are women?", options: ["30%", "45%", "56%", "70%"], correct: 2 },
    { q: "RA 10361 is also known as:", options: ["Batas Kasambahay", "Magna Carta of Workers", "Solo Parents Act", "Labor Code Amendment"], correct: 0 },
    { q: "The Filipino gender wage gap is approximately:", options: ["95 centavos per peso", "78–80 centavos per peso", "60 centavos per peso", "No gap exists"], correct: 1 },
    { q: "RA 11210 provides expanded maternity leave of:", options: ["60 days", "90 days", "105 days", "180 days"], correct: 2 },
    { q: "RA 8972 supports:", options: ["Senior citizens", "Solo parents", "PWDs", "OFWs"], correct: 1 },
    { q: "Pantawid Pamilyang Pilipino Program (4Ps) cash grants are usually given to:", options: ["Fathers", "Mothers", "Eldest child", "Barangay captain"], correct: 1 },
    { q: "Approximately how many of Filipino working professionals are women?", options: ["1 in 10", "2 in 10", "4 in 10", "8 in 10"], correct: 2 },
    { q: "Kasambahay workers are entitled to:", options: ["Minimum wage", "Rest days", "SSS coverage", "All of the above"], correct: 3 },
    { q: "Women dominate which OFW sector?", options: ["Construction", "Seafaring", "Domestic and care work", "Engineering"], correct: 2 },
    { q: "GAD budget is what % of an agency's total budget?", options: ["1%", "3%", "5%", "10%"], correct: 2 },
  ],

  [
    { q: "Since when have Filipino women outnumbered men in college enrollment?", options: ["1970s", "1980s", "1990s", "2010s"], correct: 2 },
    { q: "DepEd's gender policy is called:", options: ["GAD Curriculum Act", "Gender-Responsive Basic Education Policy", "K-12 Equity Act", "Pink Policy"], correct: 1 },
    { q: "Which university hosts a pioneering gender studies center?", options: ["UST", "Ateneo", "UP", "DLSU"], correct: 2 },
    { q: "CHED requires every HEI to have:", options: ["A GAD focal point", "Pink classrooms", "All-female faculty", "Mandatory religion class"], correct: 0 },
    { q: "The Safe Spaces Act applies to:", options: ["Streets only", "Workplaces only", "Schools and campuses too", "Government only"], correct: 2 },
    { q: "Women are now the majority in many Philippine ___ enrollments:", options: ["Sports", "Theology", "STEM fields", "Military"], correct: 2 },
    { q: "Anti-bullying laws in schools must address bullying based on:", options: ["Religion only", "Gender and SOGIE", "Academics", "Sports"], correct: 1 },
    { q: "Gender-fair language is encouraged in:", options: ["Textbooks", "Classrooms", "Curriculum", "All of the above"], correct: 3 },
    { q: "Filipino women remain underrepresented in:", options: ["Higher education", "Healthcare", "Leadership and top management", "Teaching"], correct: 2 },
    { q: "Comprehensive Sexuality Education is mandated under:", options: ["RA 10354 (RH Law)", "RA 9710", "RA 11313", "RA 8353"], correct: 0 },
  ],

  [
    { q: "Telenovelas have long portrayed women as:", options: ["CEOs", "Long-suffering martyrs", "Scientists", "Politicians"], correct: 1 },
    { q: "Which pageant winner used her platform for women & children's advocacy in 2018?", options: ["Pia Wurtzbach", "Catriona Gray", "Megan Young", "R'Bonney Gabriel"], correct: 1 },
    { q: "Drag Race Philippines is a franchise of which global show?", options: ["America's Next Top Model", "RuPaul's Drag Race", "The Voice", "MasterChef"], correct: 1 },
    { q: "Which OPM band questions machismo in their lyrics?", options: ["Ben&Ben", "Lola Amour", "Both", "Neither"], correct: 2 },
    { q: "Indie Philippine cinema increasingly features:", options: ["War epics", "Complex women leads and LGBTQ+ stories", "Cartoons", "Game shows"], correct: 1 },
    { q: "Which Filipino term is reclaimed by the queer community?", options: ["Bakla", "Tomboy", "Both", "Neither"], correct: 2 },
    { q: "Filipino advertising is moving away from:", options: ["Color photos", "Strict pink-blue gender divides", "TV ads", "Endorsers"], correct: 1 },
    { q: "Vice Ganda is one of the country's highest-paid:", options: ["Athletes", "Entertainers", "Politicians", "Chefs"], correct: 1 },
    { q: "Which Filipino film won Best Foreign Film recognition discussing women's labor abroad?", options: ["Heneral Luna", "Sunday Beauty Queen", "Birdshot", "Dekada '70"], correct: 1 },
    { q: "Catriona Gray's pageant platform highlighted:", options: ["Climate change", "HIV awareness and women's empowerment", "Education only", "Anti-poverty only"], correct: 1 },
  ],

  [
    { q: "Filipino families traditionally rely on:", options: ["Nuclear family only", "Extended kinship networks", "State institutions only", "Tribal councils"], correct: 1 },
    { q: "Co-parenting by aunts and uncles is common because:", options: ["The law requires it", "Extended family is deeply involved", "Schools demand it", "It's a modern trend"], correct: 1 },
    { q: "'Padre de familia' as the sole authority is a legacy of:", options: ["Pre-colonial culture", "Spanish colonization", "American period", "Japanese occupation"], correct: 1 },
    { q: "Solo parents in the Philippines are protected by:", options: ["RA 8972", "RA 9262", "RA 11313", "RA 9710"], correct: 0 },
    { q: "The Philippines is one of how many countries without civil divorce?", options: ["1", "2 (with Vatican City)", "5", "10"], correct: 1 },
    { q: "Pre-colonial marriage practices in many Filipino societies featured:", options: ["Patriarchal contracts", "Bride price paid by men's families", "Both spouses retaining property rights", "All of the above"], correct: 3 },
    { q: "Which household role is often associated with the Filipino mother?", options: ["Ilaw ng tahanan", "Haligi ng tahanan", "Panganay", "Bunso"], correct: 0 },
    { q: "Annulment in the Philippines is granted on grounds of:", options: ["Irreconcilable differences", "Psychological incapacity (among others)", "Mutual consent", "Long separation"], correct: 1 },
    { q: "Many Filipino households are financially run by:", options: ["Fathers exclusively", "Mothers", "Eldest sons", "Grandparents only"], correct: 1 },
    { q: "Bilateral kinship means lineage is traced through:", options: ["The father's side", "The mother's side", "Both parents", "Godparents"], correct: 2 },
  ],

  [
    { q: "In the WEF Global Gender Gap rankings, the Philippines consistently leads in:", options: ["Europe", "Africa", "Southeast Asia", "South America"], correct: 2 },
    { q: "Quezon City passed a landmark ordinance in 2014 protecting:", options: ["Senior citizens", "SOGIE rights", "Tricycle drivers", "Pets"], correct: 1 },
    { q: "The SOGIE Equality Bill has been pending in Congress since:", options: ["1990", "2000", "2010", "2020"], correct: 1 },
    { q: "Hidilyn Diaz won her Olympic gold in which year?", options: ["2016", "2018", "2020 (held 2021)", "2024"], correct: 2 },
    { q: "Maria Lourdes Sereno was appointed Chief Justice in:", options: ["2008", "2010", "2012", "2016"], correct: 2 },
    { q: "Which city was the first in the Philippines with a Gender-Fair Ordinance?", options: ["Makati", "Cebu City", "Quezon City", "Davao"], correct: 2 },
    { q: "The Magna Carta of Women is the local enactment of which UN convention?", options: ["CRC", "CEDAW", "ICCPR", "UDHR"], correct: 1 },
    { q: "Catriona Gray was crowned Miss Universe in:", options: ["2015", "2018", "2020", "2022"], correct: 1 },
    { q: "Leni Robredo's grassroots movement is best known for:", options: ["Pink campaign", "Yellow ribbon", "Red shirts", "Blue wave"], correct: 0 },
    { q: "Filipino women's participation in STEM degrees ranks:", options: ["Among the lowest in Asia", "Average in Asia", "Among the highest in Asia", "Untracked"], correct: 2 },
  ],

  [
    { q: "The 1987 Constitution explicitly recognizes the role of:", options: ["Men in nation-building", "Women in nation-building", "Children only", "Elders only"], correct: 1 },
    { q: "Which RA expanded paid paternity leave?", options: ["RA 8187", "RA 9262", "RA 11313", "RA 9710"], correct: 0 },
    { q: "What does CEDAW stand for?", options: ["Convention to End Discrimination Against Women", "Convention on the Elimination of All Forms of Discrimination Against Women", "Council for Equality of Discriminated Asian Women", "Charter on Equal Discrimination Action for Women"], correct: 1 },
    { q: "Reproductive Health Law is also known as:", options: ["RA 9710", "RA 10354", "RA 11313", "RA 8353"], correct: 1 },
    { q: "Filipino feminist organization founded in 1984:", options: ["Gabriela", "Akbayan", "Bayan Muna", "Makibaka"], correct: 0 },
    { q: "Which body conducts the Gender and Development audit?", options: ["COA", "PCW", "CHR", "DBM"], correct: 1 },
    { q: "What is the term 'kasambahay' a respectful replacement for?", options: ["Driver", "Househelper / katulong", "Yaya", "Gardener"], correct: 1 },
    { q: "Which is NOT covered under RA 9262?", options: ["Physical abuse", "Psychological abuse", "Economic abuse", "Traffic violations"], correct: 3 },
    { q: "Hidilyn Diaz competes in which sport?", options: ["Boxing", "Weightlifting", "Taekwondo", "Gymnastics"], correct: 1 },
    { q: "Which is a pre-colonial Tagalog moon goddess?", options: ["Mayari", "Lakapati", "Maria Makiling", "Diwata"], correct: 0 },
  ],
];

export const QUIZ = QUIZ_SETS[0];

export const ACADEME_BENTO = [
  { title: "Gender-Responsive Policies", body: "CHED and DepEd require gender-sensitive curricula, anti-harassment policies, and GAD focal points in every institution.", icon: ShieldCheck, span: "md:col-span-2" },
  { title: "SOGIE Inclusion", body: "Growing recognition of sexual orientation, gender identity, and expression in student handbooks and campus life.", icon: Heart, span: "" },
  { title: "Women in STEM", body: "Filipino women now outnumber men in many STEM enrollments — though leadership gaps persist.", icon: GraduationCap, span: "" },
  { title: "Safe Campuses", body: "Safe Spaces Act extends to schools: zero tolerance for gender-based bullying and harassment.", icon: Landmark, span: "md:col-span-2" },
];

export const MEDIA_STORIES = [
  { title: "Traditional Portrayals", body: "Telenovelas long cast women as long-suffering martyrs and men as breadwinner-heroes — reinforcing rigid roles.", tone: "from-rose-200/60 to-purple-200/60" },
  { title: "Modern Representation", body: "Indie cinema and streaming series feature complex women leads, working mothers, and LGBTQ+ stories.", tone: "from-purple-200/60 to-indigo-200/60" },
  { title: "Advertising Trends", body: "Brands increasingly market across genders, breaking the 'pink-blue' divide and embracing inclusive casting.", tone: "from-indigo-200/60 to-violet-200/60" },
  { title: "LGBTQ+ Visibility", body: "From Vice Ganda to Drag Race Philippines — queer Filipino artistry has gone mainstream and global.", tone: "from-violet-200/60 to-fuchsia-200/60" },
];

export const RESOURCES = [
  {
    category: "Local Government Resources",
    items: [
      { name: "Philippine Commission on Women (PCW)", url: "https://pcw.gov.ph" },
      { name: "Official Gazette — Laws on Women", url: "https://www.officialgazette.gov.ph" },
      { name: "Philippine Statistics Authority — Gender Statistics", url: "https://psa.gov.ph/gender-stat" },
      { name: "DSWD — Women's Welfare Programs", url: "https://www.dswd.gov.ph" },
      { name: "DOLE — Bureau of Workers with Special Concerns", url: "https://bwsc.dole.gov.ph" },
      { name: "CHED — Gender and Development", url: "https://ched.gov.ph" },
    ],
  },
  {
    category: "Local Academic Sources",
    items: [
      { name: "UP Center for Women's and Gender Studies", url: "https://cwgs.up.edu.ph" },
      { name: "Ateneo Gender Hub", url: "https://www.ateneo.edu" },
      { name: "DLSU Gender and Development Office", url: "https://www.dlsu.edu.ph" },
      { name: "Philippine Journal of Social Sciences and Humanities", url: "https://journals.upd.edu.ph" },
      { name: "Review of Women's Studies (UP)", url: "https://journals.upd.edu.ph/index.php/rws" },
    ],
  },
  {
    category: "International References",
    items: [
      { name: "UN Women — Asia Pacific (Philippines)", url: "https://asiapacific.unwomen.org/en/countries/philippines" },
      { name: "World Economic Forum — Global Gender Gap Report", url: "https://www.weforum.org/reports/global-gender-gap-report-2024" },
      { name: "CEDAW — UN Convention on the Elimination of Discrimination Against Women", url: "https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-elimination-all-forms-discrimination-against-women" },
      { name: "UNESCO — Gender Equality in Education", url: "https://www.unesco.org/en/gender-equality" },
      { name: "UNDP — Gender Inequality Index", url: "https://hdr.undp.org/data-center/thematic-composite-indices/gender-inequality-index" },
      { name: "ILO — Women in the World of Work", url: "https://www.ilo.org/global/topics/equality-and-discrimination/gender-equality" },
    ],
  },
  {
    category: "Advocacy & NGOs",
    items: [
      { name: "GABRIELA Philippines", url: "https://gabrielaphilippines.com" },
      { name: "Likhaan Center for Women's Health", url: "https://www.likhaan.org" },
      { name: "Rainbow Rights Project PH", url: "https://www.facebook.com/rainbowrightsph" },
      { name: "Lunduyan Foundation", url: "https://lunduyan.org" },
      { name: "Women's Legal and Human Rights Bureau (WLB)", url: "https://wlb.org.ph" },
      { name: "Bahaghari Center for SOGIE Research", url: "https://www.facebook.com/BahagharingTomboy" },
    ],
  },
];

export const CONTENT_REFERENCES = [
  {
    category: "Academe & Higher Education",
    items: [
      "Perez, M. et al. (2025). Gender and Development Policies in Philippine HEIs: Institutionalization and Practice. Philippine Journal of Higher Education Studies.",
      "Rosario, L. et al. (2025). Gendered Barriers to Research Productivity Among Academic Women in Teaching-Intensive HEIs.",
      "Rodriguez, A. (2025). Colonial Legacies and the Gender Regime in Philippine Higher Education.",
      "Hernandez, J. et al. (2021). Mainstreaming GAD Approaches in Philippine Universities.",
      "Raton-Hibanada, R. et al. (2025). Inclusivity Beyond Gender: Intersectionality in Philippine Academe.",
      "Tagaza, E. & Manalansan, K. (2025). Pedagogical Reforms for Gender-Inclusive Teaching in the Philippines.",
    ],
  },
  {
    category: "History & Society",
    items: [
      "Mananzan, M. J. (2004). Essays on Women (Revised ed.). Institute of Women's Studies, St. Scholastica's College.",
      "Brewer, C. (2004). Shamanism, Catholicism and Gender Relations in Colonial Philippines, 1521–1685. Ashgate.",
      "Roces, M. (2012). Women's Movements and the Filipina, 1986–2008. University of Hawai'i Press.",
      "Garcia, J. N. C. (2008). Philippine Gay Culture: Binabae to Bakla, Silahis to MSM. UP Press.",
    ],
  },
  {
    category: "Laws & Policy",
    items: [
      "Republic Act No. 9710 (2009). Magna Carta of Women.",
      "Republic Act No. 9262 (2004). Anti-Violence Against Women and Their Children Act.",
      "Republic Act No. 11313 (2019). Safe Spaces Act ('Bawal Bastos').",
      "Republic Act No. 7877 (1995). Anti-Sexual Harassment Act.",
      "Republic Act No. 11210 (2019). Expanded Maternity Leave Law.",
      "Philippine Commission on Women. (2023). Implementing Rules and Regulations of the Magna Carta of Women.",
    ],
  },
  {
    category: "Labor, Family & Media",
    items: [
      "Philippine Statistics Authority. (2024). Women and Men in the Philippines: Statistical Handbook.",
      "ILO. (2023). Decent Work and Gender Equality in the Philippines.",
      "World Economic Forum. (2024). Global Gender Gap Report — Philippines Country Profile.",
      "UN Women. (2023). Country Gender Equality Profile: Philippines.",
      "Tolentino, R. B. (2001). National/Transnational: Subject Formation and Media in and on the Philippines. Ateneo de Manila University Press.",
    ],
  },
];

export const SECTION_ICONS = {
  introduction: BookOpen,
  history: Landmark,
  gad: Sparkles,
  family: Heart,
  labor: Briefcase,
  academe: GraduationCap,
  media: Tv,
  laws: Scale,
  interactive: Globe,
  resources: BookOpen,
};
