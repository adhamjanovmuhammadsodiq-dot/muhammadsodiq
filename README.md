# MuhammadSodiq — Personal Portfolio Website

Zamonaviy, yorqin va qulay shaxsiy portfolio veb-sayti. 12 yoshli yosh dasturchi va robototexnika ixlosmandi **MuhammadSodiq** uchun maxsus ishlab chiqilgan.

A polished, responsive, and multilingual personal portfolio for **MuhammadSodiq** — a 12-year-old student developer exploring Scratch, mBlock, Robotics, and MIT App Inventor at IlmHub.

---

## 🌟 Xususiyatlari / Features

- **3 ta to‘liq til (Multilingual)**:
  - 🇺🇿 **UZ**: O‘zbek lotin alifbosi
  - 🇷🇺 **RU**: Русский язык
  - 🇺🇿 **КИР**: Ўзбек кирилл алифбоси
  - Tanlangan til `localStorage`da saqlanadi va sahifa yangilanganda ham eslab qolinadi.
- **Zamonaviy Light Theme UI**:
  - Toza oq/slate fon (`#F8FAFC`), to‘q navy matn (`#0F172A`), electric blue (`#2563EB`) va cyan (`#06B6D4`) aksentlar.
  - WCAG AA kontrast talablariga to‘liq javob beruvchi dizayn.
- **Interaktiv va chiroyli bo‘limlar**:
  1. **Navbar**: Sticky menyu, 3 zonali arxitektura, mobil drawer menyusi, faol bo‘lim ko‘rsatkichi.
  2. **Hero**: Student developer maqomi, ism, tanishuv, CTA tugmalari, animatsiyali avatar va uning atrofida aylanuvchi texnologiyalar (Scratch, mBlock, Robotics, App Inventor).
  3. **About Me**: MuhammadSodiq haqida haqqoniy ma’lumotlar, IlmHub’dagi 1 yillik tajriba.
  4. **Skills**: Scratch, mBlock, Robotics, MIT App Inventor kartalari (darajalar haqqoniy ravishda: "Faol amaliyotda", "O‘rganilmoqda", "Tajribalar bosqichida").
  5. **Learning Journey**: 6 bosqichli vizual vaqt shkalasi (timeline).
  6. **Projects**: Loyihalar kartalari, "Loyiha tafsilotlari tez kunda" ko‘rsatkichi va batafsil ko‘rish modali.
  7. **Interests**: Qiziqishlar va texnologiyalar buluti.
  8. **Goals**: Learn, Build, Grow maqsadlar bo‘limi.
  9. **Contact**: Instagram (@muhammadsodiq_0141) va telefon raqami (+998 91 769 01 41), 1 bosish bilan nusxalash imkoniyati.
  10. **Footer & Back to Top**: Mualliflik huquqlari va yuqoriga qaytish tugmasi.
- **Avatar & Favicon**:
  - Avatarni almashtirish juda oson (`public/avatar.png`).
  - Agar rasm bo‘lmasa, nafis "MS" bosh harflari avtomatik tarzda chiqadi.
  - SVG texnologik favicon (`public/favicon.svg`).
- **To‘liq Responsive**:
  - iPhone, Android, iPad, noutbuk va katta ekranlarda mukammal moslashuvchan.
- **Accessibility & Performance**:
  - `prefers-reduced-motion` qo‘llab-quvvatlanadi.
  - Skrinriderlar uchun qulay semantik teglardan foydalanilgan.

---

## 🛠 Texnologiyalar / Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **Lucide Icons**

---

## 🚀 Ishga tushirish / Quick Start

### 1. O‘rnatish:
```bash
npm install
```

### 2. Dasturchi rejimida ishga tushirish (Local Dev):
```bash
npm run dev
```
Sayt `http://localhost:3000` manzilida ochiladi.

### 3. Production uchun yig‘ish (Build):
```bash
npm run build
```

---

## 🎨 O‘zgartirish va Sozlash / Customization

### 1. Avatarni almashtirish:
O‘zingizning yangi rasmingizni `public/avatar.png` manziliga joylashtiring. U avtomatik tarzda sahifada paydo bo‘ladi. Agar rasm bo‘lmasa, tizim chiroyli "MS" monogrammali zaxira rasmini ko‘rsatadi.

### 2. Faviconni almashtirish:
`public/favicon.svg` faylini o‘zgartirishingiz yoki boshqa SVG logotip bilan almashtirishingiz mumkin.

### 3. Matnlar va Tarjimalarni tahrirlash:
Barcha matnlar `src/data/translations.ts` faylida jamlangan. U yerdan `uz`, `ru` va `kir` bo‘limlarini osonlik bilan o‘zgartirishingiz mumkin.

### 4. Yangi loyihalar qo‘shish:
`src/data/projects.ts` faylidagi massivga yangi loyiha ob’ektini qo‘shing. Loyiha havolasi (`url`) tayyor bo‘lganda, uni kiritishingiz mumkin.

---

## 🌐 Deployment (Vercel & GitHub)

### Vercel:
1. Loyihani GitHub reponizga push qiling:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of MuhammadSodiq portfolio"
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
2. [Vercel](https://vercel.com) saytiga kiring va "Add New Project" tugmasini bosing.
3. GitHub reponi tanlang — loyiha Vite konfiguratsiyasi va `vercel.json` orqali 1 daqiqada avtomatik deploy bo‘ladi!

---

## 📄 Mualliflik / Copyright

© 2026 MuhammadSodiq. Barcha huquqlar himoyalangan.
IlmHub o‘quvchisi portfolio loyihasi.
