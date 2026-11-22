export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  category: 'architecture' | 'backend' | 'algorithms' | 'frontend';
  categoryLabel: string;
  publishedAt: string;
  readTime: string;
  views: string;
  tags: string[];
  featured?: boolean;
  content: {
    lead: string;
    sections: {
      heading: string;
      paragraphs: string[];
      codeSnippet?: {
        language: string;
        filename?: string;
        code: string;
      };
      callout?: {
        type: 'info' | 'tip' | 'warning';
        text: string;
      };
    }[];
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'ast-asosida-kod-oxshashligini-tekshirish',
    title: 'AST (Abstract Syntax Tree) va Levenshtein orqali kod o‘xshashligini aniqlash',
    summary:
      'Online judge va o‘quv platformalarida talabalar kodlaridagi plagiatni aniqlash arxitekturasi: o‘zgaruvchilar nomi o‘zgarganda ham strukturaviy o‘xshashlikni qanday topish mumkin?',
    category: 'algorithms',
    categoryLabel: 'Algoritmlar & Tizimlar',
    publishedAt: '2026-10-15',
    readTime: '6 daqiqa',
    views: '1,420',
    tags: ['Python', 'AST', 'Algorithms', 'Anti-Plagiarism', 'Django'],
    featured: true,
    content: {
      lead: 'Dasturlash musobaqalari va taʼlim tizimlarida (masalan, RoboContest yoki SamCoding) eng katta muammolardan biri — bu yechimlarni bir-biridan ko‘chirish (plagiat) hisoblanadi. Oddiy string solishtirish yetarli emas, chunki foydalanuvchi o‘zgaruvchilar nomini o‘zgartirishi yoki probellarni qo‘shishi mumkin.',
      sections: [
        {
          heading: '1. Muammoning mohiyati va Nega oddiy diff ish bermaydi?',
          paragraphs: [
            'Agar ikki talaba bir xil masalani yechsa, ularning kodi sintaktik jihatdan turli xil ko‘rinishi mumkin: biri `for i in range(n)` desa, ikkinchisi `while i < n` deb yozishi yoki o‘zgaruvchilarni `res` o‘rniga `ans` deb atashi mumkin.',
            'Bunday holatda Python ning ichki `ast` (Abstract Syntax Tree) moduli yordamida kodni sintaktik daraxtga aylantiramiz va o‘zgaruvchilar nomlarini normalizatsiya (anonimizatsiya) qilamiz.',
          ],
          codeSnippet: {
            language: 'python',
            filename: 'ast_normalizer.py',
            code: `import ast

class CodeNormalizer(ast.NodeTransformer):
    def __init__(self):
        self.var_map = {}
        self.counter = 0

    def visit_Name(self, node):
        if node.id not in self.var_map:
            self.counter += 1
            self.var_map[node.id] = f"var_{self.counter}"
        node.id = self.var_map[node.id]
        return node

def normalize_python_code(source_code: str) -> str:
    tree = ast.parse(source_code)
    normalizer = CodeNormalizer()
    normalizer.visit(tree)
    return ast.unparse(tree)`,
          },
          callout: {
            type: 'tip',
            text: 'Normalizatsiya qilingan daraxt leksik jihatdan standartlashadi, bu esa Levenshtein yoki Jaccard Similarity algoritmlarining aniqligini 95% dan oshiradi.',
          },
        },
        {
          heading: '2. Levenshtein masofasini hisoblash va Natijalar',
          paragraphs: [
            'Daraxt normalizatsiya qilingach, tokenlar ketma-ketligi olinadi va ularning o‘zaro o‘xshashlik koeffitsienti [0.0 - 1.0] oralig‘ida baholanadi.',
            'Ushbu arxitektura `django-codecompare` ochiq kodli loyihamizda amalga oshirilgan bo‘lib, soniyasiga yuzlab topshiriqlarni asinxron tahlil qila oladi.',
          ],
        },
      ],
    },
  },
  {
    slug: 'laravel-da-redis-queue-va-yuqori-yuklama',
    title: 'Laravel da Redis Queue va Horizon orqali soniyasiga 5,000+ so‘rovlarni qayta ishlash',
    summary:
      'Yuqori yuklamali FinTech va Telegram bot ekotizimlarida server bloklanishini oldini olish: asinxron navbatlar, idempotency kalitlari va rate limiting strategiyalari.',
    category: 'backend',
    categoryLabel: 'Backend Arxitekturasi',
    publishedAt: '2026-09-28',
    readTime: '8 daqiqa',
    views: '2,890',
    tags: ['PHP', 'Laravel', 'Redis', 'High-Load', 'Architecture'],
    featured: true,
    content: {
      lead: 'Telegram botlar yoki onlayn to‘lov tizimlarida (Click/Payme) so‘rovlar soni bir vaqtda keskin oshib ketishi (traffic spike) odatiy holat. Agar har bir so‘rovni sinxron bajaradigan bo‘lsak, Nginx va PHP-FPM ishchi jarayonlari to‘lib qoladi va tizim 504 Gateway Timeout xatosini beradi.',
      sections: [
        {
          heading: '1. Navbat tizimini to‘g‘ri sozlash va Redis konfiguratsiyasi',
          paragraphs: [
            'Asosiy qoida: Webhook qabul qiluvchi kontroller faqatgina so‘rovni qabul qilib, uni zudlik bilan Redis navbatiga tashlashi va `200 OK` qaytarishi kerak. Barcha og‘ir hisob-kitoblar, maʼlumotlar bazasiga yozish va bildirishnomalar alohida worker lar tomonidan bajariladi.',
          ],
          codeSnippet: {
            language: 'php',
            filename: 'TelegramWebhookController.php',
            code: `namespace App\\Http\\Controllers;

use App\\Jobs\\ProcessTelegramUpdate;
use Illuminate\\Http\\Request;
use Illuminate\\Http\\Response;

class TelegramWebhookController extends Controller
{
    public function handle(Request $request): Response
    {
        $payload = $request->all();
        
        // Zudlik bilan Redis navbatiga uzatish
        ProcessTelegramUpdate::dispatch($payload)
            ->onQueue('telegram-high')
            ->afterResponse();

        return response('OK', 200);
    }
}`,
          },
          callout: {
            type: 'info',
            text: '`afterResponse()` metodi mijozga zudlik bilan javob qaytarib, ulanishni yopadi va resurslarni bo‘shatadi.',
          },
        },
        {
          heading: '2. Idempotency va Takroriy Yozilishdan Himoya',
          paragraphs: [
            'Tarmoq uzilishlari sababli to‘lov tizimlari bir xil tranzaksiyani 2-3 marta yuborishi mumkin. Buni oldini olish uchun Redis atomik qulflari (`Redis::set($key, 1, "EX", 60, "NX")`) orqali har bir tranzaksiya faqat bir marta ishlanishi kafolatlanadi.',
          ],
        },
      ],
    },
  },
  {
    slug: 'hud-kiber-brutalist-dizayn-tizimini-nextjs-da-qurish',
    title: 'HUD va Kiber-Brutalist Dizayn Tizimini Next.js da Qurish Tajribasi',
    summary:
      'Qatʼiy 0px chegaralar, 8 segmentli burchak fasetlari (corners), dot-grid matritsalar va yuqori kontrastli qora va oq mavzu arxitekturasini kodda amalga oshirish sirlari.',
    category: 'frontend',
    categoryLabel: 'UI / UX Muhandisligi',
    publishedAt: '2026-11-20',
    readTime: '5 daqiqa',
    views: '980',
    tags: ['Next.js', 'TailwindCSS', 'Design Systems', 'CSS', 'UI'],
    featured: false,
    content: {
      lead: 'Aksariyat zamonaviy veb-saytlar bir xil yumaloq (rounded-xl) va shaffof elementlardan foydalanadi. Ushbu uslub esa bundan butunlay farq qiladi: u dasturchilar terminali, videoo‘yin HUD interfeysi va yuqori aniqlikdagi muhandislik estetikasini uyg‘unlashtiradi.',
      sections: [
        {
          heading: '1. Burchak fasetlari (HUD Corners) qanday chiziladi?',
          paragraphs: [
            'Kartochkalar burchaklarida alohida SVG rasmlar emas, balki sof CSS ko‘p qatlamli `linear-gradient` fonlaridan foydalaniladi. Bu brauzer yuklanishini tezlashtiradi va DOM elementlarini minimal ushlab turadi.',
          ],
          codeSnippet: {
            language: 'css',
            filename: 'hud-corners.css',
            code: `.portfolio-hud-corner::before {
  content: '';
  position: absolute;
  inset: -1px;
  pointer-events: none;
  background:
    linear-gradient(90deg, var(--portfolio-primary), transparent) top left / 24px 1px no-repeat,
    linear-gradient(180deg, var(--portfolio-primary), transparent) top left / 1px 24px no-repeat,
    linear-gradient(270deg, var(--portfolio-primary), transparent) top right / 24px 1px no-repeat,
    linear-gradient(180deg, var(--portfolio-primary), transparent) top right / 1px 24px no-repeat,
    linear-gradient(90deg, var(--portfolio-primary), transparent) bottom left / 24px 1px no-repeat,
    linear-gradient(0deg, var(--portfolio-primary), transparent) bottom left / 1px 24px no-repeat,
    linear-gradient(270deg, var(--portfolio-primary), transparent) bottom right / 24px 1px no-repeat,
    linear-gradient(0deg, var(--portfolio-primary), transparent) bottom right / 1px 24px no-repeat;
}`,
          },
          callout: {
            type: 'warning',
            text: 'Fasetlar to‘g‘ri ko‘rinishi uchun kartochkada `position: relative` bo‘lishi va burchak radiusi `0px` bo‘lishi shart.',
          },
        },
      ],
    },
  },
];
