# قائمة التجمع الوطني الديمقراطي — حمام دباغ

صفحة عربية متجاوبة لعرض قائمة مترشحي التجمع الوطني الديمقراطي لبلدية حمام دباغ، ولاية قالمة.

## التشغيل المحلي

```bash
npm install
npm run dev
```

افتح `http://localhost:3000`. للتحقق من نسخة الإنتاج:

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

## بيانات القائمة

عدّل أسماء المترشحين وترتيبهم في `data/candidates.ts`، وبيانات الحملة وروابط التواصل في `data/campaign.ts`.

ضع الصور المحسنة بصيغة WebP في `public/images/candidates/`، ثم عيّن مسار الصورة في حقل `photo` للمترشح. إرشادات الصور ومثال البيانات في `public/images/candidates/README.md`.

## معاينة المشاركة

قبل النشر، انسخ `.env.example` إلى `.env.local` واضبط `NEXT_PUBLIC_SITE_URL` على عنوان الموقع العام ليتمكن Open Graph من بناء روابط المعاينة الكاملة.

يمكن إضافة وسوم UTM إلى رابط رمز QR، مثل:

`?utm_source=qr&utm_medium=print&utm_campaign=hamam_debagh`
