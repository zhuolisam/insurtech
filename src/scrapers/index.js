const puppeteer = require("puppeteer");
const xlsx = require("xlsx");
const fs = require("fs");

async function startBrowser() {
  let browser;
  try {
    console.log("Opening the browser......");
    browser = await puppeteer.launch({
      headless: false, //change this to true to make browser invisible
      args: ["--disable-setuid-sandbox"],
      ignoreHTTPSErrors: true,
    });
  } catch (err) {
    console.log("Could not create a browser instance => : ", err);
  }
  return browser;
}

async function scrapeAll(browserInstance) {
  let browser;
  try {
    const browser = await browserInstance;
    const googleResultJSONList = await GoogleResultScraper.scraper(browser);
    await ahrefScraper.scraper(browser, googleResultJSONList);
  } catch (err) {
    console.log("Could not resolve the browser instance => ", err);
  }
}

const GoogleResultScraper = {
  queries: [
    "insurance",
    "life insurance",
    "保健保險",
    "人壽保險",
    "保險"
//     "Neurobion Tab 10s x50",
// "Neurobion Tab 10s x6",
// "BIO ESSENCE BIO-WATER BIOME BALANCING CLEANSER 100G",
// "BIO ESSENCE BIO-WATER BIOME BALANCING HYDRO GEL 45G",
// "BIO ESSENCE BIO-WATER BIOME BALANCING REPAIR SERUM 30ML",
// "BIO ESSENCE BIO-WATER BIOME BALANCING SOLUTION 100ML",
// "Bio-Essence Bio-Gold Day Cream Spf25 40g",
// "Bio-Essence Bio-Gold Gold Water 150ml",
// "Bio-Essence Bio-Gold Golden Ratio Double Serum 36G",
// "Bio-Essence Bio-Gold Night Cream 40g",
// "Bio-Essence Bio-Gold Radiance Cleanser 100g",
// "Bio-Essence Bio-Gold Rose Gold Water 100ml",
// "Bio-Essence Bio-Renew Deep Cleanser 100g",
// "Bio-Essence Bio-Water Energizing Water 100ml",
// "Bio-Essence Bio-Water Energizing Water 300ml",
// "BIO-ESSENCE BIO-WATER ENERGIZING WATER 300ML X2 + 30ML X2",
// "Bio-Essence Bio-Water Foamy Cleanser 100g",
// "Bio-Essence Bio-Water Hydrating Sunscreen Spf50+ Pa++ 40ml",
// "Bio-Essence Bio-Water Moist-In-Water Lotion 150ml",
// "Bio-Essence Bio-Water Vitamin B5 Gel 30ml",
// "Bio-Essence Bio-White 5Pcs Trial Kit Set",
// "Bio-Essence Bio-White Advance White Cleanser 100g",
// "Bio-Essence Bio-White Advance White Day Cream Spf20 50g",
// "Bio-Essence Bio-White Advance White Night Cream 50g",
// "Bio-Essence Bio-White Advance White Refiner 100ml",
// "Bio-Essence Bio-White Advance White Serum 30ml",
// "Pigeon Breast Pad Comfyfeel 60S (PG79293)",
// "Pigeon Children Fluoride Free Toothpaste 6M+ Strawberry 45G (07855)",
// "Pigeon Children Toothgel 12M+ Grape 45G (78207)",
// "Pigeon Children Toothgel 12M+ Natural 45G (78208)",
// "Pigeon Nipple Puller",
// "Pigeon Nose Cleaner",
// "Pigeon Nose Cleaner (Tube Type)",
// "Pigeon Silicone Nipple Shield 13Mm",
// "Pigeon Softouch PPLUS Wide Neck Nipple 15M+ LLL 2S (78351)",
// "Pigeon Softouch PPSU Wide Neck Bottle 160ML (26830)",
// "Pigeon Softouch PPSU Wide Neck Bottle 240ML (26831)",
// "Pigeon Training Toothbrush Lesson 1 6-8M+ Pink/Yellow (11827/78338)",
// "Pigeon Training Toothbrush Lesson 2 8-12M+ Yellow/Orange (11829/78339)",
// "Pigeon Training Toothbrush Lesson 3 12-18M+ Green/Blue (11830/11788)",
// "Pigeon Wide Neck Bottle 0M+ 160ml",
// "Pigeon Wide Neck Bottle 3M+ 240ml",
// "Pigeon Wide Neck Bottle 6M+ 330ml",
// "Pigeon Wide Neck Nipple 0M+ ss 1s",
// "Pigeon Wide Neck Nipple 1M+ s 2s",
// "Pigeon Wide Neck Nipple 3M+ M 2s",
// "Pigeon Wide Neck Nipple 6M+ L 2s",
// "Pigeon Wide Neck Nipple 9M+ Ll 2s",
// "Berocca Efferversent Tab Orange 2s",
// "Berocca Efferversent Tab Orange 2s x12",
// "Berocca Effervescent Tablets (Mango) 15s",
// "Berocca Effervescent Tablets (Orange) 15S X2",
// "Nivea (F) Dry Comfort Spray 2X150ml",
// "Nivea (F) Energy Fresh Spray 150ml",
// "Nivea (F) Energy Fresh Spray 2X150ml",
// "Nivea (F) Extra White Spray 150ml",
// "Nivea (F) Extra White Spray 2X150ml",
// "Nivea (F) Happy Shave Spray 150ml",
// "Nivea (F) Pearl & Beauty Spray 150ml",
// "Nivea (F) Pearl & Beauty Spray 2X150ml",
// "Nivea (F) R/O B&W Silky Smooth 50ml",
// "Nivea (F) R/O B&W Silky Smooth 50ml X2",
// "Nivea (F) R/O B&W Ultimate Protection 50ml",
// "Nivea (F) R/O B&W Ultimate Protection 50ml X2",
// "Nivea (F) R/O Deo Happy Shave 50ml",
// "Nivea (F) R/O Deo Pearl& Beauty 50ml",
// "Nivea (F) R/O Dry 2X50ml",
// "Nivea (F) R/O Dry 50ml",
// "Nivea (F) R/O Energy Fresh 2X50ml",
// "Nivea (F) R/O Energy Fresh 50ml",
// "Nivea (F) R/O Extra White & Firm Q10 2X50ml",
// "Nivea (F) R/O Extra Whitening 50ml",
// "Nivea (F) R/O Extra Whitening 50ml X2",
// "Nivea (F) R/O Happy Shave 2X50ml",
// "Nivea (F) R/O Pearl& Beauty 50ml X2",
// "Nivea (F) R/O Whitening 2X50ml",
// "Nivea (F) R/O Whitening 50ml",
// "Nivea (F) R/O Whitening Deep Serum Hokkaido Rose 2X50ml",
// "Nivea (F) R/O Whitening Deep Serum Hokkaido Rose 50ml",
// "Nivea (F) R/O Whitening Deep Serum Sakura 2X50ml",
// "Nivea (F) R/O Whitening Deep Serum Sakura 50ml",
// "Nivea (F) Roll On Whitening Deep Serum Lily 50ml",
// "Nivea (F) Roll On Whitening Deep Serum R/O Lily 50ml X2",
// "Nivea (F) Spray B&W Ultimate Protection 150ml",
// "Nivea (F) Spray B&W Ultimate Protection 150ml X2",
// "Nivea (F) Spray Whitening Deep Serum Hokkaido Rose 150ml",
// "Nivea (F) Spray Whitening Deep Serum Hokkaido Rose 2X150ml",
// "Nivea (F) Spray Whitening Deep Serum Lily 150ml X2",
// "Nivea (F) Spray Whitening Deep Serum Sakura 150ml",
// "Nivea (F) Spray Whitening Deep Serum Sakura 2X150ml",
// "Nivea (M) Cool Kick Spray 150ml",
// "Nivea (M) Cool Kick Spray 2X150ml",
// "Nivea (M) Cool Powder Spray 2X150ml",
// "Nivea (M) Deep White Oil Clear Mud Foam 100g",
// "Nivea (M) Dry Impact Spray 150ml",
// "Nivea (M) Extra Whitening Volcanic Mud Foam 100g",
// "Nivea (M) Moisturising Shaving Foam 200ml",
// "Nivea (M) R/O B&W Fresh 50ml X2",
// "Nivea (M) R/O B&W Invisible 50ml X2",
// "Nivea (M) R/O B&W Ultimate Protection 50ml",
// "Nivea (M) R/O B&W Ultimate Protection 50ml X2",
// "Nivea (M) R/O Cool Kick 50ml X2",
// "Nivea (M) R/O Deep 2X50ml",
// "Nivea (M) R/O Deep 50ml",
// "Nivea (M) R/O Deep Amazonia 2X50ml",
// "Nivea (M) R/O Deep Amazonia 50ml",
// "Nivea (M) R/O Deep Espresso 2X50ml",
// "Nivea (M) R/O Deep Espresso 50ml",
// "Nivea (M) R/O Deo Cool Kick 50ml",
// "Nivea (M) R/O Deo Silver Protect 2X50ml",
// "Nivea (M) R/O Deo Silver Protect 50ml",
// "Nivea (M) R/O Dry 2X50ml",
// "Nivea (M) R/O Dry 50ml",
// "Nivea (M) R/O Dry 50ml+25ml",
// "Nivea (M) R/O Fresh Active 2X50ml",
// "Nivea (M) Silver Protect Spray 150ml",
// "Nivea (M) Silver Protect Spray 2X150ml",
// "Nivea (M) Spray B&W Fresh 150ml",
// "Nivea (M) Spray B&W Fresh 150ml X2",
// "Nivea (M) Spray B&W Invisible 150ml",
// "Nivea (M) Spray B&W Invisible 150ml X2",
// "Nivea (M) Spray B&W Ultimate Protection 150ml",
// "Nivea (M) Spray B&W Ultimate Protection 150ml X2",
// "Nivea (M) Spray Deep Amazonia 150ml",
// "Nivea (M) Spray Deep Amazonia 2X150ml",
// "Nivea (M) Spray Deep Espresso 150ml",
// "Nivea (M) Spray Deep Espresso 2X150ml",
// "Nivea (M) Total Anti Acne Oil Control Foam 100g",
// "Nivea (M) Total Anti Acne Oil Control Mud Foam 100g",
// "NIVEA BABY DAILY PROTECTION SMOOTHY CREAM 200ML",
// "NIVEA BABY GENTLE TOUCH MOISTURISING LOTION 200ML",
// "NIVEA BABY HEAD TO TOE SHAMPOO & BATH 500ML",
// "NIVEA BABY NO TEARS MILD SHAMPOO 200ML",
// "NIVEA BABY PURE & SENSITIVE WASH LOTION 500ML",
// "Nivea Creme 250ml",
// "Nivea Creme 60ml",
// "Nivea Express Hydration Body Lotion 125ml",
// "Nivea Express Hydration Body Lotion 400ml",
// "NIVEA EXTRA WHITE C&A VITAMIN LOTION 180ML",
// "NIVEA EXTRA WHITE C&A VITAMIN LOTION 320ML",
// "Nivea Extra White C&E Vitamin Lotion 180ml",
// "Nivea Extra White C&E Vitamin Lotion 320ml",
// "Nivea Extra White Cooling Lotus Lotion 200ml",
// "Nivea Extra White Cooling Lotus Lotion 350ml",
// "Nivea Extra White Firm & Smooth Q10 Lotion 400ml",
// "Nivea Extra White Insta Glow Body Lotion With Spf15 Pa+ 100ml",
// "Nivea Extra White Insta Glow Body Lotion With Spf15 Pa+ 350ml",
// "Nivea Extra White Radiant & Smooth Body Lotion 125ml",
// "Nivea Extra White Radiant & Smooth Body Lotion 400ml",
// "Nivea Extra White Repair & Protect Lotion 350ml",
// "Nivea Female Roll On Naturally Good Aloe Vera 50ml",
// "Nivea Female Roll On Naturally Good Green Tea 50ml",
// "NIVEA FRESH BLEND APRICOT MANGO SHOWER 300ML",
// "NIVEA FRESH BLEND RASPBERRY BLUEBERRY SHOWER 300ML",
// "NIVEA FRESH BLEND WATERMELON MINT SHOWER 300ML",
// "Nivea Hydro Care Lip Balm 4.8g",
// "Nivea Intensive Body Milk 125ml",
// "Nivea Intensive Body Milk Lotion 400ml",
// "Nivea Intensive Moisture Body Lotion Spf15 350ml",
// "Nivea Lip Care Fruity Shine Strawberry Spf 10 4.8g",
// "Nivea Lip Fruity Shine Cherry Spf10 4.8g",
// "Nivea Lotion Extra White Repair & Protect 100ml",
// "Nivea Lotion Repair & Care 72H 400ml",
// "Nivea Lovely Lips Natural Pink 2.4g",
// "Nivea Make Up Clear Cleansing Wipes 25s",
// "NIVEA NATURALLY GOOD ALOE VERA SPRAY 75ML",
// "NIVEA NATURALLY GOOD COTTON FLOWER SCENT & ORGANIC OIL ENRICHED SHOWER 300ML",
// "NIVEA NATURALLY GOOD GREEN TEA SPRAY 75ML",
// "NIVEA NATURALLY GOOD HONEYSUCKLE SCENT & ORGANIC OIL ENRICHED SHOWER 300ML",
// "NIVEA NATURALLY GOOD ROSE WATER SCENT & ORGANIC OIL ENRICHED SHOWER 300ML",
// "Nivea Original Care Caring Lip Balm 4.8g",
// "Nivea Pearly Shine Caring Lip Balm 4.8g",
// "Nivea Pure Cleansing Wipes 25s",
// "Nivea Q10 Power Anti-Wrinkle Day Cream Spf15 50ml",
// "Nivea Q10 Power Anti-Wrinkle Night Cream 50ml",
// "Nivea Rose Oil In Lotion 200ml (85706)",
// "Nivea Sensitive Caring Micellar Water 200ml",
// "Nivea Sun Moisturising Immediate Spf 30 Pa++ 125ml",
// "Nivea Sun Moisturising Immediate Spf 50 Pa++ 125ml",
// "Nivea Sun Protect & Moisture Spf 50 75ml",
// "Nivea Sun Water Sport Lotion Spf50 100ml",
// "NIVEA SUPERVITAMIN LOTION 180ML",
// "NIVEA SUPERVITAMIN LOTION 320ML",
// "NIVEA WHITE LOTION RADIANT ROSE 350ML",
// "NIVEA WHITE LOTION SAKURA & JOJOBA OIL 200ML",
// "NIVEA WHITE LOTION SAKURA & JOJOBA OIL 350ML",
// "Nivea White Oil Clear Cleanser 100g",
// "Nivea White Pearl Glowy Hydrating Foam 100g",
// "Nivea Micellair Rose Water Milk & Toner 200ml",
// "Nivea Micellair Rose Water Wash Gel 150ml",
// "Loreal Color Protect Shampoo 170ml",
// "Loreal Colorvive Shampoo 280Ml",
// "Loreal Exc 1 Natural Black",
// "Loreal Exc 3 Natural Dark Brown",
// "Loreal Exc 4 Natural Brown",
// "Loreal Exc 4.15 Ash Mahogany Brown",
// "Loreal Exc 4.26 Purple Brown",
// "Loreal Exc 4.35 Dark Caramel Brown",
// "Loreal Exc 4.45 Mahogany Copper Brown",
// "Loreal Exc 5 Natural Light Brown",
// "Loreal Exc 5.35 Chocolate Brown",
// "Loreal Exc 6.30 Golden Dark Blonde",
// "Loreal Exc Fashion 5.62 Intense Violet Brown",
// "Loreal Exc Fashion 6.1 Medium Brown",
// "Loreal Exc Fashion 6.66 Intense Spicy Red",
// "Loreal Exc Fashion 7.1 Light Brown",
// "Loreal Extraord Clay Shampoo 640ml",
// "Loreal Extraordinary Floral Oil Jasmine 100ml",
// "Loreal Extraordinary Floral Oil Lavender 100ml",
// "Loreal Extraordinary Floral Oil Rose 100ml",
// "Loreal Extraordinary Oil (Colored Hair) 100ml -Red",
// "Loreal Extraordinary Oil (Dry Hair) 100ml -Brown",
// "Loreal Extraordinary Oil (High Shine) 100ml -Pink",
// "Loreal Extraordinary Oil (Normal Or Dry Hair) 100ml -Gold",
// "Loreal Extraordinary Oil (Normal Or Dry Hair) 30ml -Gold",
// "Loreal Extraordinary Oil Droplet 2mlx4S -Pink",
// "Loreal Extraordinary Oil Premium Conditioner 440Ml Curl",
// "Loreal Extraordinary Oil Premium Conditioner 440Ml Shine",
// "Loreal Extraordinary Oil Premium Conditioner 440Ml Sleek",
// "Loreal Extraordinary Oil Premium Shampoo 440Ml Curl",
// "Loreal Extraordinary Oil Premium Shampoo 440Ml Shine",
// "Loreal Extraordinary Oil Premium Shampoo 440Ml Sleek",
// "Loreal Fall Repair 3X Shampoo 330ml",
// "Loreal Fall Resist 3X Anti-Dandruff Shampoo 280Ml",
// "Loreal Fall Resist 3X Hair Mask 200ml",
// "Loreal Fall Resist 3X Shampoo 280Ml",
// "Loreal Fall Resist Anti-Dandruff Shampoo 330ml",
// "Loreal Gentle Cleansing Milk 200ml",
// "Loreal Gentle Lip & Make Up Remover 125ml",
// "Loreal Keratin Smooth 72H Shampoo 280Ml",
// "Loreal Keratin Smooth Shampoo 650ml",
// "Loreal Magic Retouch Instant Root Concealer Spray Black 75ml",
// "Loreal Magic Retouch Instant Root Concealer Spray Brown 75ml",
// "Loreal Magic Retouch Instant Root Concealer Spray Dark Brown 75ml",
// "Loreal Men Expert Charcoal Black Scrub 100ml",
// "Loreal Men Expert Hydra Power Duo Form 100ml",
// "Loreal Men Expert Hydra Power Watery Foaming Gel 100ml",
// "Loreal Men Expert Lotion Hydra Energetic 120ml",
// "Loreal Men Expert Lotion Hydra Power 120ml",
// "Loreal Men Expert White Activ Foam 100ml",
// "Loreal Men Expert White Activ Moist Gel Cream 50ml",
// "Loreal Men Expert White Activ Oil Control Foam 100ml",
// "Loreal Men Expert White Activ Volcano Red Foam 100ml",
// "Loreal Men White Active Charcoal Foam 100ml",
// "Loreal Micellar Water 3-In-1 Moisturizing 400ml",
// "Loreal Micellar Water Moisturizing 250ml",
// "Loreal Micellar Water Refreshing 250ml",
// "Loreal Oil Nourish 6 Shampoo 280Ml",
// "Loreal Pro Youth Mask Brightening",
// "Loreal Pro Youth Mask Lifting",
// "Loreal Pro Youth Mask Plumping",
// "Loreal Revitalift Anti Wrinkle Aqua-Milky Toner 200ml",
// "Loreal Revitalift Crystal Micro Essence 130ml",
// "Loreal Revitalift Crystal Micro Essence 65ml",
// "Loreal Revitalift Day Cream Spf23/spf35 50ml",
// "Loreal Revitalift Essence Water 130ml",
// "LOREAL REVITALIFT FRESHMIX SERUM MASK 33G",
// "LOREAL REVITALIFT HYALURONIC ACID HYDRATING GEL CLEANSER 100ML",
// "LOREAL REVITALIFT HYALURONIC ACID PLUMPING DAY CREAM 50ML",
// "LOREAL REVITALIFT HYALURONIC ACID SERUM 15ML",
// "Loreal Revitalift Hyaluronic Acid Serum 30ml",
// "Loreal Revitalift Laser X3 Day Cream 50ml",
// "Loreal Revitalift Laser X3 Essence 30ml",
// "Loreal Revitalift Milky Foam 100ml",
// "Loreal Revitalift Night Cream 50ml",
// "Loreal Revitalift Night Essence 30ml",
// "Loreal Revitalift Triple Action Eye Cream 15ml",
// "Loreal Revitalift Triple Action Night Cream Mask 50ml",
// "Loreal Revitalift Wht Anti-Wrinkle + Spot Corrector Spf18 Cream 50ml",
// "Loreal Studio Indestructible-Extreme Hold 150ml",
// "Loreal Total Repair 5 Hair Mask 200ml",
// "Loreal Total Repair 5 Shampoo 280Ml",
// "Loreal Total Repair 5 Shampoo 330ml",
// "Loreal Total Repair Shampoo 650ml",
// "Loreal UV Perfect Even Complexion Spf50 30ml",
// "Loreal White Perfect Laser Day Cream Spf19 50ml",
// "Loreal White Perfect Laser Derm White Essence 30ml",
// "Loreal White Perfect Night Cream 50ml",
// "Loreal White Perfect Re-Light Scrub Foam 100ml",
// "Loreal White Perfect Re-Light Toner 200ml",
// "Loreal White Perfect Re-Lighting Whitening Facial Foam 100ml",
// "Loreal White Perfect Rosy Day Cream Spf 17 50ml",
// "Pediasure Oht Chocolate 850g",
// "Pediasure Oht Plain 850g",
// "Pediasure Oht Vanilla 850g",
// "Pediasure Upage OHT 10+ Chocolate 850g",
// "Pediasure Upage OHT 10+ Vanilla 850g",
// "Blackmores B+C 30s",
// "Blackmores B+C Tab 120s",
// "Blackmores Bio Ace Plus 30S",
// "Blackmores Bio Ace Plus 90S",
// "Blackmores Bio C 1000mg 120s",
// "Blackmores Bio C 1000mg 30s",
// "Blackmores Bio C1000 60s",
// "Blackmores Bio E250 60s",
// "Blackmores Bio E500 30s",
// "Blackmores Bio Zinc Plus 90s",
// "Blackmores Buffered C 120s",
// "Blackmores Buffered C 30s",
// "Blackmores Calcium + D3 120s",
// "Blackmores Calcium + D3 30s",
// "Blackmores Calcium + D3 60s",
// "Blackmores Celery 7000 120s",
// "Blackmores Celery 7000 60s",
// "Blackmores Collagen 10,000mg (10S+2S)X60ml",
// "Blackmores Coq10 150mg 30S",
// "Blackmores Coq10 50mg 120s-NEW JULY 21",
// "Blackmores Digestive Enzymes Plus 60S",
// "Blackmores Echinacea Forte 3000 120s",
// "Blackmores Epo + Fish Oil 120S",
// "Blackmores Epo + Fish Oil 30s",
// "Blackmores Epo 1000mg 360s",
// "Blackmores Epo 1000mg 60S",
// "Blackmores Epo Evening Primose Oil 1000mg 100S",
// "Blackmores Executive B 30s",
// "Blackmores Fish Oil 1000mg 30s",
// "Blackmores Fish Oil 1000mg 400s",
// "Blackmores Garlic Oil 250s",
// "Blackmores Garlic Oil 90s",
// "Blackmores Glucosamine 1500mg 30s",
// "Blackmores Grape seed Forte 12000 30s",
// "Blackmores Horseradish+Garlic 60s",
// "Blackmores Kids Multivitamins + Minerals 60s",
// "Blackmores Lecithin 1200mg 100S",
// "Blackmores Lutein Vizion Plus 60s",
// "Blackmores Magnesium 60S",
// "Blackmores Milk Thistle 60S",
// "Blackmores Multi B 120s",
// "Blackmores Multi B 30s",
// "Blackmores Multi Vit+Min Tab 30s",
// "Blackmores MultiVitamin + Mineral 120s",
// "Blackmores Multivitamins + Minerals 60s",
// "Blackmores Omega 1000mg 120s",
// "Blackmores Omega Cardiwell Fish Oil (Odourless) 60s",
// "Blackmores Pregnancy Feeding Formula 60S",
// "Blackmores Proseren For Men 60S",
// "Blackmores Teen Multi For Girls 60s",
// "Blackmores Vitamin C500 60s",
// "Blackmores Vitamin D3 1000Iu 60S",
// "Redoxon Chewable Vitamin C 30s",
// "Redoxon Chewable Vitamin C 60S",
// "Redoxon Da Effervescent (Orange) 2s",
// "Redoxon Da Effervescent (Orange) 2s x12",
// "Redoxon Effervescent Blackcurrant 10s",
// "Redoxon Effervescent Blackcurrant 15s",
// "Redoxon Effervescent Blackcurrant 30s",
// "Redoxon Kids Double Action Chewable 60S",
// "Redoxon Triple Action Vit C 1000mg +D3 10s",
// "Redoxon Triple Action Vit C 1000mg +D3 15s",
// "Redoxon Triple Action Vit C 1000mg +D3 30s",
// "Redoxon Triple Action Vit C 1000mg +D3 45s",
// "Redoxon Vita Guard Effervescent Orange 30s",
// "Swisse Kids Calcium + Vitamin D3 chewable tab 60s",
// "Swisse Ultiboost Beauty Collagen Complex 30s",
// "Swisse Ultiboost Calcium + Vitamin D 180s",
// "Swisse Ultiboost Co-Enzyme Q10 150mg 60s",
// "Swisse Ultiboost Lecithin 1200mg cap 150s",
// "Swisse Ultiboost Odourless Fish Oil 1000mg 200s",
// "Swisse Ultiboost Odourless Fish Oil Concentrare 1800mg 60s",
// "SWISSE ULTIBOOST VITAMIN C 1000mg 150S",
// "Swisse Ultiboost Vitamin C Effervescent 20s",
// "Swisse Ultiboost Vitamin D 60s",
// "Flavettes Chewable Vitamin C 250mg (Blackcurrent) 100s",
// "Flavettes Chewable Vitamin C 250mg (Blackcurrent) 60s",
// "Flavettes Chewable Vitamin C 250mg (Orange) 100s",
// "Flavettes Chewable Vitamin C 250mg (Orange) 60s",
// "Flavettes Daily Plus Tablet 60s",
// "Flavettes Effevescent 1000mg Vit C Orange 30s",
// "Flavettes Effevescent Glow Tab 15s",
// "Flavettes Effevescent Glow Tab 30s",
// "FLAVETTES EFFEVESCENT H-DRATE 15S",
// "FLAVETTES EFFEVESCENT H-DRATE 2X15S",
// "Flavettes Effevescent Vit C + Zinc 30s",
// "Flavettes Glamz Effervescent 15sx2",
// "Flavettes Neuroforte Tab 50X10S (99999)",
// "Flavettes Sugar Free Vitamin C 250mg (Orange) 100s",
// "Flavettes Sugar Free Vitamin C 250mg (Orange) 60s",
// "Flavettes Time Release C 1000mg With Calcium 60s",
// "Flavettes Vit C W/ Buffer C Plus Bioflavonoids 60s",
// "Flavettes Vital Effervescent Orange 15S",
// "Flavettes Vital Effervescent Orange 15s x2",
// "Appeton Activ-C 100mg Blackcurrant 60s",
// "Appeton Activ-C 100mg Orange 60s",
// "Appeton Activ-C 100mg strawberry 60s",
// "Appeton Antioxidant Caplets 60s",
// "Appeton A-Z Kids Vit C 30mg Blackcurrant 100s",
// "Appeton A-Z Kids Vit C 30mg Orange 100s",
// "Appeton A-Z Kids Vit C 30mg strawberry 100s",
// "Appeton A-Z Kids Vit C Pastilles 5S X 20",
// "Appeton Ess Evening Primrose Oil 60s",
// "Appeton Ess Milk Calcium Tab 120s",
// "Appeton Folic Acid 90s",
// "Appeton Ms Teen 30s",
// "Appeton Multivitamin Infant Drops 30ml",
// "Appeton Multivitamin Lysine Syrup 120ml",
// "Appeton Multivitamin Lysine With Prebiotics 60s",
// "Appeton Multivitamin Optigrow Plus 60s",
// "Appeton Multivitamin With Taurine 60S (Dha)",
// "Appeton Mv21 + selenium Ginseng Cap 30s",
// "Appeton Mv21 Capsule 30s",
// "Appeton Natal Care Caplet 3x10s",
// "Appeton Teengrow Cap 30s",
// "Appeton Vit C 250mg Blackcurrant 60s",
// "Appeton Vit C 250mg Orange 60s",
// "Appeton Vit C 500mg Orange 30s",
// "Appeton Wellness 60+ Diabetic Vanilla 900g",
// "Thomson Circulon 125mg 6s x5",
// "Thomson Ginkgo 40mg 120s",
// "Thomson Ginkgo 40mg 120S X 2",
// "Thomson Ginkgo 40mg 30s",
// "Thomson Ginkgo 40mg 30S X 2",
// "Thomson Ginkgo Extract 40mg 500s+30s",
// "Thomson Livrin 300 120s + 30s",
// "Thomson Livrin 300 2X30s",
// "Thomson Livrin 300mg 300s",
// "Thomson Livrin 300mg 300s+30s",
// "Thomson Osteopro 300mg 2X120+60s",
// "Gillette After Shave Splash 50ml",
// "Gillette Blue 2 Plus 10s",
// "Gillette Blue 2 Plus 1s",
// "Gillette Blue 2 Plus 2s",
// "Gillette Blue 2 Plus Disposables 5S+1s (Polybag)",
// "Gillette Blue 2 Plus Pivot 5s",
// "Gillette Blue 2 Plus Ultra sensitive 2s",
// "Gillette Blue 3 2s",
// "Gillette Blue 3 Disposables Ice 4s",
// "Gillette Blue 3 Disposables sensitive (Base) 4s",
// "Gillette Blue 3 Disposables sensitive 4s",
// "Gillette Blue 3 simple Disposable 4s",
// "Gillette Daisy Classic Polybag Razors 4+1s",
// "Gillette Foamy Shaving Cream Lemon Lime 175g",
// "Gillette Foamy Shaving Cream Lemon Lime 50g",
// "Gillette Foamy Shaving Cream Menthol 175g",
// "Gillette For Women Daisy Ultragrip 3s",
// "Gillette Fusion Proglide 2In1 Benefits Cooling Shave Gel 195g",
// "Gillette Fusion Proglide 2S (Refill)",
// "Gillette Fusion Proglide 4S (Refill)",
// "Gillette Fusion Proglide Flexball Razor",
// "Gillette Mach3 sensitive 2s Cartridges",
// "Gillette Mach3 sensitive 4s Cartridges",
// "Gillette Mach3 Sensitive Razor",
// "Gillette Mach3 Turbo 4s Cartridges",
// "Gillette Mach3 Turbo Razor 3D+2 Cart",
// "GILLETTE MACH3+ RAZOR+2 CART",
// "Gillette Nacet Ii 5S+1s Polybag",
// "Gillette Shave Gel Moisturizing 195g",
// "Gillette simple Venus 2 Razor 8s",
// "Gillette simply Venus 3 Razor Pink 2s",
// "Gillette simply Venus 3 Razor Pink 4s",
// "Gillette skinguard Cart 4s",
// "Gillette Vector Plus 4S Cartridge",
// "Gillette Vector Razor",
// "Gillette Venus 3 4S Pouch",
// "Gillette Venus 4S Cart",
// "Gillette Venus Comfortglide White Tea Razor+2 Cart",
// "Gillette Venus sensitive Pink Razor 3s",
// "Johnsons Baby Active Kids Clean & Fresh Shampoo 200ml",
// "Johnsons Baby Active Kids Clean & Fresh Shampoo 500ml",
// "Johnsons Baby Baby Shampoo 200ml",
// "Johnsons Baby Bath 200ml Milk+Oat",
// "Johnsons Baby Bath 1000ml Bedtime",
// "Johnsons Baby Bath 1000ml Milk+Oat",
// "Johnsons Baby Bath 1000ml Milk+Rice",
// "Johnsons Baby Bath 1000ml Regular",
// "Johnsons Baby Bath 1L Peach",
// "Johnsons Baby Bath 200ml Bedtime",
// "Johnsons Baby Bath 200ml Active Fresh",
// "Johnsons Baby Bath 200ml Cotton Touch",
// "Johnsons Baby Bath 200ml Milk+Rice",
// "Johnsons Baby Bath 200ml Regular",
// "Johnsons Baby Bath 200ml Top To Toe",
// "Johnsons Baby Bath 500ml Active Fresh",
// "Johnsons Baby Bath 500ml Cotton Touch",
// "Johnsons Baby Bath 500ml Milk+Rice",
// "Johnsons Baby Bath 500ml Top To Toe",
// "Johnsons Baby Bath 600ml Milk+Rice Refill",
// "Johnsons Baby Bath 600ml Peach Refill",
// "Johnsons Baby Bath 600ml Regular Refill",
// "Johnsons Baby Bath 600ml X2 Milk+Rice Refill",
// "Johnsons Baby Bath 600ml X2 Peach Refill",
// "Johnsons Baby Bath 600ml X2 Regular Refill",
// "Johnsons Baby Cologne 125ml Morning Dew",
// "Johnsons Baby Cologne 125ml Powder Mist",
// "Johnsons Baby Cologne 125ml Summer Swing",
// "Johnsons Baby Conditioner 200ml Active Kids shiny Drops",
// "Johnsons Baby Giftset Bathtime",
// "Johnsons Baby Lotion 100ml Bedtime",
// "Johnsons Baby Lotion 100ml Milk+Rice",
// "Johnsons Baby Lotion 100ml Regular",
// "Johnsons Baby Lotion 200ml Milk+Oats",
// "Johnsons Baby Lotion 200ml Milk+Rice",
// "Johnsons Baby Lotion 200ml Regular",
// "Johnsons Baby Lotion 500ml Bedtime",
// "Johnsons Baby Lotion 500ml Milk+Rice",
// "Johnsons Baby Lotion 500ml Regular",
// "Johnsons Baby Oil 125ml Aloe Vera",
// "Johnsons Baby Oil 125ml Bedtime",
// "Johnsons Baby Oil 125ml Lite",
// "Johnsons Baby Oil 125ml Regular",
// "Johnsons Baby Oil 300ml Regular",
// "Johnsons Baby Oil 50ml Aloe Vera",
// "Johnsons Baby Oil 50ml Bedtime",
// "Johnsons Baby Oil 50ml Regular",
// "Johnsons Baby Powder 100g Active Fresh",
// "Johnsons Baby Powder 100g Blossoms",
// "Johnsons Baby Powder 100g Classic",
// "Johnsons Baby Powder 100g Nourishing With Milk+Rice",
// "Johnsons Baby Powder 200g Blossoms",
// "Johnsons Baby Powder 200g Classic",
// "Johnsons Baby Powder 200g Cooling",
// "Johnsons Baby Powder 500g Cooling",
// "Johnsons Baby Powder 500g Nourishing With Milk+Rice",
// "Johnsons Baby Powder Bedtime 100g",
// "Johnsons Baby Powder Bedtime 500g",
// "Johnsons Baby Powder Blossoms 500g",
// "Johnsons Baby Powder Blossoms 500gx2",
// "Johnsons Baby Powder Classic 2X500g",
// "Johnsons Baby Shampoo 100ml Gold",
// "Johnsons Baby Shampoo 100ml Soft & Smooth",
// "Johnsons Baby shampoo 200ml Active Kids shiny Drops",
// "Johnsons Baby Shampoo 200ml Soft & Smooth",
// "Johnsons Baby shampoo 500ml Active Kids shiny Drops",
// "Johnsons Baby Shampoo 500ml Soft & Smooth",
// "Johnsons Baby Shampoo 800ml Gold",
// "Johnsons Baby Soap 100g",
// "Johnsons Baby soap 100g X3 Blossoms",
// "Johnsons Baby Soap 100gx3",
// "Johnsons Baby Travel Kit 50ml (4Item)",
// "Johnsons Baby Wipes 20s x3 Messy Times",
// "Johnsons Baby Wipes 80s X2 Messy Times",
// "Johnsons Baby Wipes skincare Fragrance 20s",
// "Johnsons Baby Wipes skincare Fragrance Free 75s",
// "Johnsons Baby Wipes skincare Fragranced Lightly 75s",
// "Johnsons Body Wash Ph5.5 2 In 1 500mlx2 Refill",
// "Johnsons Body Wash Ph5.5 2 In 1 750ml FOC 250ml",
// "Johnsons Body Wash Ph5.5 Nourishing 500ml Almond Refill",
// "Johnsons Body Wash Ph5.5 Nourishing 500ml Honey Refill",
// "Johnsons Body Wash Ph5.5 Nourishing 500mlx2 Almond Refill",
// "Johnsons Body Wash Ph5.5 Nourishing 500mlx2 With Honey Refill",
// "Johnsons Body Wash Ph5.5 Nourishing 750ml Almond",
// "21st Century Acid Free C 1000mg 50s",
// "21st Century Acid Free C 500mg 50s",
// "21st Century Adult Mosquito Repellent Lotion 4Oz",
// "21st Century Amino Zinc 60s",
// "21st Century Bcaa 30s",
// "21st Century B-Complex 30s",
// "21st Century Big 100 50s",
// "21st Century Burnex 50S (Lipo Complex)",
// "21st Century Cal Mag Zinc 120s",
// "21st Century Cal Mag Zinc 30s",
// "21st Century Chewy C 90s",
// "21st Century Chewy Dha Apple 45s",
// "21st Century Child Weight Gain 250g Choc",
// "21st Century Chitosan 1000mg 30s",
// "21st Century Co-Enzyme Q10 30mg Veg Caps 30s",
// "21st Century Co-Enzyme Q10 60mg 30s",
// "21st Century Cranberry Juice 1 Litre",
// "21st Century Diabalance 30s",
// "21st Century Elastin Collagen 600mg 30s",
// "21st Century Eyebright Complex 30s",
// "21st Century Fabuloss 5 60s",
// "21st Century Fat Burner Powder 250g",
// "21st Century Ginkgo Biloba 1000mg 30s",
// "21st Century Ginkgo Biloba 2500mg 30s",
// "21st Century Ginkgo Biloba 500mg 30s",
// "21st Century Ginkgo Biloba 6000mg 30s",
// "21st Century Gtf Chromium 30s",
// "21st Century Herbal Hair Plus 30S",
// "21st Century Herbal Insect Repellent Candle 285g",
// "21st Century Herbal Lipo Tea Natural (24S) 48g",
// "21st Century Herbs For Your skin 30s-IBT TO CLEAR",
// "21st Century Junior Memorax 30s",
// "21st Century L-Arginine 1000mg 30s",
// "21st Century L-Arginine 500mg Plus 30s",
// "21st Century Livmeric 30s",
// "21st Century L-Lysine 600mg 50s",
// "21st Century Maxi Cal 180s",
// "21st Century Maxi Cal 600mg 60s",
// "21st Century Memorax 30S",
// "21st Century Milk Thistle 500mg 30s",
// "21st Century Montmorency Tart Cherry Juice Concentrate 500ml",
// "21st Century Muscle Builder & Rapid Weight Gain Choc 250g",
// "21st Century Nourishair Hair Thickener 4Oz",
// "21St Century Nourishair Shampoo Plus Cond. 16Oz(480ml)",
// "21St Century Nourishair Tonic 4Oz(120ml)",
// "21st Century Nuhair Thickener (Black) 200g",
// "21st Century One-A-Day 30s",
// "21st Century Pomegranate 500mg 60s",
// "21st Century Probiotics 30s",
// "21st Century Probiotics 90s",
// "21st Century Prolonged Release Vit C 1000mg 120s",
// "21st Century Psylium Clenz 500mg 60s",
// "21st Century Royal Propollen Ginseng Plus Royal Jelly 30s",
// "21st Century saw Palmetto 640mg 30s",
// "21st Century Selenium & Ace 30S",
// "21st Century selenium 200Mcg 50s",
// "21st Century spectrum Multivits & Minerals 30s",
// "21st Century spirulina 1000mg 120s",
// "21st Century Tummy Trimmer Powder 250g",
// "21st Century Vegesamine 500mg 120s",
// "21st Century Vegesamine 500mg 30s",
// "21st Century Vein Away 30s",
// "21st Century Vit C Chewable -1000mg 60s",
// "21st Century Vitamin C 1000mg Prolonged 50s",
// "21st Century Vitamin C 500mg 90s",
// "21st Century Vitamin C-500mg Chewable 100s",
// "Rexona Men Deo R/O 48H Ice Cool 50ml",
// "Rexona Men Deo R/O 48H Quantum 50ml",
// "Rexona Men Deo R/O 48H Sport Defence 50ml",
// "Rexona Men Deo R/O 48H V8 50ml",
// "Rexona Men Deo R/O Adventure 50ml",
// "Rexona Men Deodorant Roll on Invisible Dry 50ml",
// "Rexona Men Deodorant Roll on Xtra Cool 50ml",
// "Rexona Women Deo R/O Invisible Dry 50ml",
// "Rexona Women Deo R/O Passion 50ml",
// "Rexona Women Deo R/O Powder Dry 50ml",
// "Rexona Women Deo R/O Shower Clean 50ml",
// "Rexona Women Deo R/O Whitening 40ml",
// "Rexona Women Deo R/O Whitening 50ml",
// "Rexona Women Deodorant Roll on Sexy Bouquet 50ml",
// "Pureen 3-Piece Manicure Set (Ns G02)",
// "Pureen A-B-D Detergent Powder 1.2kg",
// "Pureen A-B-D Detergent Powder 500g",
// "Pureen Antibacterial Wipes 2X30s",
// "Pureen Antibactireal Wipes 2X80s",
// "Pureen Baby Bath 250ml",
// "Pureen Baby Cornstarch Powder 40g",
// "Pureen Baby Cotsheet (Medium)",
// "Pureen Baby Head To Toe Wash 250ml",
// "Pureen Baby Head To Toe Wash 750ml",
// "Pureen Baby Lotion 225ml",
// "Pureen Baby Lotion 500ml",
// "Pureen Baby Powder 175g",
// "Pureen Baby Powder 50g",
// "Pureen Baby Powder Mild & Caring 2X525g FOC 325g",
// "Pureen Baby Powder Mild & Caring 325g",
// "Pureen Baby Powder Pure Cornstarch 300g",
// "Pureen Baby Powder Pure Cornstrach 125g",
// "Pureen Baby Soother With Cover 2S Bsf(T)",
// "Pureen Baby Toothbrush (Tbf-01)",
// "Pureen Baby Wipes 2X100S (Green)",
// "Pureen Baby Wipes 2X100S (Pink)",
// "Pureen Baby Wipes 2X30S Fragnance Free(Orange)",
// "Pureen Baby Wipes 2X30S (Green)",
// "Pureen Baby Wipes 2X30S (Pink)",
// "Pureen Baby Wipes 2X80S (Green)",
// "Pureen Baby Wipes Flushable (Blue) 2X25s",
// "Pureen Baby Wipes Fragnance Free 100S (Orange)",
// "Pureen Baby Wipes Fragnance Free 2X100S (Orange)",
// "Pureen Baby Wipes Fragnance Free 2X80S (Orange)",
// "Pureen Baby Wipes Fragnance Free 80S (Orange)",
// "Pureen Baby Wipes With Aloe Vera & Vit E 2X30S (Blue)",
// "Pureen Baby Wipes With Aloe Vera & Vit E 2X80S (Blue)",
// "Pureen Baby Wipes With Aloe Vera & Vit E 30S (Blue)",
// "Pureen Baby Wipes With Aloe Vera & Vit E 80S (Blue)",
// "Pureen Baby Wipes XL 2X40s",
// "Pureen Basic 3/7 Power Dispenser B3Tf01",
// "Pureen Basic 3-Tier Milk Powder Container B3Tf2",
// "Pureen Basic Baby Soother 0+Month Bssf-2",
// "Pureen Basic Bottle & Teat Brush Bbby01",
// "Pureen Basic Breast Pump W Bottle",
// "Pureen Basic Powder Dispenser [Bpdf01]",
// "Pureen Bottle & Teat Brush Wt Sponge Nby06",
// "Pureen Clinzo Isotonic Spray 50ml",
// "Pureen Colourful Water Filled Teether 3Pcs",
// "Pureen Disposable Breast Pads 12s",
// "Pureen Disposable Breast Pads 24s",
// "Pureen Disposable Nursing Pads 24s",
// "Pureen Disposable Nursing Pads 84s",
// "Pureen Feeding Bottle (3X8Oz) With Printing (Fbp-3)",
// "Pureen Feminine Wipes Flushable 3x10s",
// "Pureen Foldable Bottle & Nipple Clean Brush",
// "Pureen Kids Head To Toe Wash Peach Mango 150ml",
// "Pureen Kids T/Brush (2-6) Buy 2 Free 1",
// "Pureen Kids T/Brush (6-12) Buy 2 Free 1",
// "Pureen Kids Toothbrush (6-12 Yrs) 1s",
// "Pureen Kids Toothpaste Mint 40g",
// "Pureen Kids Toothpaste Mint 75g",
// "Pureen Kids Toothpaste Orange 40g",
// "Pureen Kids Toothpaste Orange 75g",
// "Pureen Kids Toothpaste Strawberry 40g",
// "Pureen Kids Toothpaste Strawberry 75g",
// "Pureen Kids Yog Bath 150ml (Orange)",
// "Pureen Kids Yog Shampoo 150ml (S/Berry)",
// "Pureen Kids Yogurt Bath (Orange) 750ml",
// "Pureen Kids Yogurt Head To Toe Wash (Apple) 750ml",
// "Pureen Kids Yogurt Head To Toe Wash (Bubble Gum) 750ml",
// "Pureen Kids Yogurt Head To Toe Wash (Natural) 750ml",
// "Pureen Kids Yogurt Head To Toe Wash (P/Mango) 750ml",
// "Pureen Kids Yogurt Head To Toe Wash (R/Berry) 750ml",
// "Pureen Kids Yogurt Head To Toe Wash 600ml (Refill)-Apple",
// "Pureen Kids Yogurt Head To Toe Wash 600ml (Refill)-Bubble Gum",
// "Pureen Kids Yogurt Head to Toe Wash 600ml (Refill)-Natural",
// "Pureen Kids Yogurt Head To Toe Wash Bubble Gum 150ml",
// "Pureen Kids Yogurt Shampoo (Strawberry) 750ml",
// "Pureen Liq. Cleanser 600ml Refill (Orange)",
// "Pureen Liq. Cleanser 750ml+600ml (Mint)",
// "Pureen Liq.Cleanser (Mint Flavour) 750ml",
// "Pureen Liq.Cleanser (No Flavour) 750ml",
// "Pureen Liq.Cleanser (Orange Flavour) 750ml",
// "Pureen Madame Maternity Pads 10s",
// "Pureen Madame Maternity Pads 20s",
// "Pureen Maternity Toothpaste (Fresh Mint) 130g",
// "Pureen Nappy Rash Cream 100g",
// "Pureen Natural-H Baby Head To Toe Wash 250ml",
// "Pureen Natural-H Baby Shampoo 250ml",
// "Pureen Ortho Soother 0-6M Pp0S-1",
// "Pureen Ortho Soother 6M+ Pp0S-2",
// "Pureen Ortho W/Neck Nipple 2S (Own)",
// "Pureen Orthodontic Silicone Pacifier 3M+ (Nsp02)",
// "Pureen Rekito Mosquito Repellent Liquid 75ml",
// "Pureen Silicone Nipple (Long Neck) L",
// "Pureen Silicone Nipple (Long Neck) M",
// "Pureen silicone Nipple (Long Neck) s",
// "Pureen Silicone Nipple (Long Neck) Xl",
// "Pureen Silicone Nipple (Short Neck) L",
// "Pureen Silicone Nipple (Short Neck) M",
// "Pureen silicone Nipple (short Neck) s",
// "Pureen Silicone Nipple (Short Neck) Xl",
// "Pureen Skin Protectant Powder 100g",
// "Pureen Skin Protectant Powder 175g",
// "Pureen Skin Protectant Powder 300g",
// "Pureen Skin Protectant Powder 50g",
// "Pureen sterilising Tab 56s",
// "Pureen Stretch Mark Lotion 150ml",
// "Pureen Travo For Ladies Free size 5 Pcs",
// "Pureen Travo For Maternity Large size 5 Pcs",
// "Pureen Travo For Men Free size 5s",
// "Pureen Travo Maternity Xl 5s",
// "Pureen Twin Feeding Bottle 4Oz+8Oz [Fcf (T)]",
// "Pureen W/Neck Silicon Nipp 2s Bwnf-2 L",
// "Pureen W/Neck Silicon Nipp 2s Bwnf-2 M",
// "Pureen W/Neck silicon Nipp 2s Bwnf-2 s",
// "Pureen Wide Neck Silicone Nipples (Xl) 2S (Bwnf)",
// "Pureen Yog Head To Wash 150ml(Natural)",
// "Hovid Chewette C 100mg (Blk Currant) 100s",
// "Hovid Chewette C 100mg (Orange) 100s",
// "Hovid Folic Acid 5mg 10s x10",
// "NH Birds Nest Collagen Drink (Wild Ginseng & Basil seed) 180ml X 6s",
// "NH Birds Nest With Aloe Vera 180ml X 6s",
// "NH Choles-K Tea 4g x 23s",
// "NH Colla Plus 3 50mlx12s",
// "NH Colla-Plus 50mlx20s",
// "NH Colla-Plus Advance 50mlx20s",
// "NH Detoxlim Natural Clenx Tea 20s",
// "NH Detoxlim Natural Clenx Tea 50s+5s",
// "NH Detoxlim Plus Vegecaps 60s",
// "NH Gluco-K Herbal Tea 4G X 23s",
// "NH Immue-U 10g x 20s",
// "NH Joint-K Tea 4G X 23s",
// "NH Nutri Grain (With Macha) 1kg",
// "NH Nutri Grains Plus With Beetroot 800g",
// "Nh Nutri Grains Plus With Purple Sweet Potato 800G",
// "NH Vege Fibre Plus 30s sachets Free 7s",
// "Biogreen 5 Grain Oatmilk Plus Energy 850g",
// "Biogreen Beta Gold Oatmilk Energy 800g",
// "Biogreen Bio-Enzymes Vinegar 950g",
// "Biogreen Celtic Sea Salt(Fine) 400g",
// "Biogreen Dream Coffee 300g (30gx10s)",
// "Biogreen Enrich Oatmilk Energy 30g X 11s Sachet",
// "Biogreen Enrich Oatmilk Pro Energy 850g",
// "Biogreen G Seasoning Powder 180g",
// "Biogreen Okid Cocoa Oatmilk 850g",
// "Biogreen Okid High Protein Soya Milk 700g",
// "Biogreen Okid Oatmilk 850g",
// "Biogreen Organic Green Balance 200gm",
// "Biogreen Osoy Plus (Cane Sugar Free) 30gX11s",
// "Biogreen Osoy Plus (Low Cane sugar) 30gx11s",
// "Biogreen Otigres Cane Sugar Free 650g",
// "Biogreen Otigres Low Cane Sugar 700g",
// "Biogreen Oyoung Collagen Drink 400g",
// "Biogreen Prune Enzymes 950g",
// "Biogreen Pure Black Sesame Powder 300g",
// "Biogreen Raw Honey 1kg",
// "Biogreen Soy Milk Dha Gold 800g",
// "Biogreen Soy Milk Powder (Low Sugar) 800g",
// "Biogreen Soy Milk Powder (Sugar Free) 700g",
// "Biore Body Serum Extra Moist 50ml",
// "Biore Body Serum Intensive White 50ml",
// "Biore Cleansing Oil Wipes 10s",
// "Biore Mens Double Scrub Acne Solution 100g",
// "Biore Mens Double Scrub Bright Clean 100g",
// "Biore Mens Double Scrub Deep Clean 100g",
// "Biore Mens Double Scrub Deep Clean Extra Cool 100g",
// "Biore Mens Double Scrub Oil Clear 100g",
// "Biore Mens Pore Pack Black strip Refreshing Cool 10s",
// "Biore Pore Pack Black 10s",
// "Biore Pore Pack Deep Pore Cleansing strips 10s",
// "Biore Pore Pack T-Zone 10s",
// "Biore UV Aqua Rich Watery Essence Spf50+ 50g",
// "Biore UV Face Milk Spf50 30ml",
// "Biore UV Perfect Block Milk Spf50 25ml",
// "Biore UV Perfect Milk Spf50 40ml"
  ],

  url: "https://www.google.com/",

  async scraper(browser) {
    //initializing empty arrays to push into
    const JSONDataListPath = "./googleResult.json";
    let totalData = [];
    let result = [];

    let finalData = [];
    let JSONDataList = {};
    //opening browser & going to url
    let page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 }); //setting wider viewport to load all products

    for (let query in this.queries) {
      let dataObj = [];

      console.log("going to google");
      try {
        await page.goto("https://www.google.com/", {
          waitUntil: "networkidle2",
          timeout: 10000,
        });
      } catch (e) {
        console.log("cant go google for some reason");
      }
      console.log(`Searching for ` + query + this.queries[query]);

      //waiting for gsearch input field
      try {
        await page.waitForSelector(".gLFyf", { timeout: 4000 });
        await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
      } catch (e) {
        console.log("No Google Search button found.");
      }

      //   await page.waitForSelector("input[name=q]");
      await page.type(
        "input[name=q]",
        this.queries[query]
        // , { delay: 5 }
      );
      await page.keyboard.press("Enter");

      try {
        await page.waitForSelector(".EIaa9b", { timeout: 4000 });
        dataObj.relatedsearch = await page.$$eval(
          ".s75CSd",
          (rs) =>
            rs.map((relatedsearch) => relatedsearch.textContent).toString() //scraping all keyword volumes, removing commas
        );
      } catch (e) {
        console.log("No related searches button found.");
        dataObj.relatedsearch = "-";
      }

      dataObj.product_name = this.queries[query];
      dataObj.relatedsearch = await page.$$eval(
        ".s75CSd",
        (rs) => rs.map((relatedsearch) => relatedsearch.textContent).toString() //scraping all keyword volumes, removing commas
      );

      dataObj.href = await page.$$eval(".yuRUbf > a", (h) =>
        h.map((href) => href.href.toString())
      );
      JSONData = {
        relatedsearch: dataObj.relatedsearch,
        href: dataObj.href,
        product_name: dataObj.product_name,
      };
      JSONDataList[dataObj.product_name] = JSONData;

      dataObj.href = dataObj.href.join("\n");
      totalData.push(dataObj);
      // console.log(totalData);
    }
    finalData.push(...totalData);
    // console.log("finalData is ");
    console.log(finalData);

    // saving to an excel file
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(finalData);
    xlsx.utils.book_append_sheet(wb, ws);
    xlsx.writeFile(wb, "googleResult.xlsx");

    console.log("Done!");
    return JSONDataList;
  },
};

const ahrefScraper = {
  url: "https://app.ahrefs.com/user/login",
  queries: [
    "https://www.watsons.com.my/vitamin-b1-b6-b12-60-s/p/BP_23859",
    "https://www.doctoroncall.com.my/medicine/en/supplements/neurobion-10s",
    "https://iprice.my/neurobion/",
    "https://iprice.my/compare/neurobion-vitamin-b1-b6-b12/",
    "https://www.lazada.com.my/neurobion/",
    "https://shopee.com.my/search?keyword=neurobion",
    "https://shopee.com.my/Neurobion-Tablets-(60's-3x60's)-i.13127318.2402353670",
    "https://www.neurobion.com/en_PH/home/products/neurobion.html",
    "https://theredclinic.com/product/neurobion-b1b6b12-10tabs/",
    "https://www.amazon.com/neurobion-forte/s?k=neurobion+forte",
    "|||||",
    "https://www.watsons.com.my/vitamin-b1-b6-b12-60-s/p/BP_23859",
    "https://iprice.my/neurobion/",
    "https://www.doctoroncall.com.my/medicine/en/supplements/neurobion-10s",
    "https://www.lazada.com.my/neurobion/",
    "https://www.lazada.com.my/tag/neurobion-vitamin-supplement/",
    "https://guardian.com.my/neurobion-60s-121091061.html",
    "https://www.neurobion.com/en_PH/home/products/neurobion.html",
    "https://www.amazon.com/neurobion-forte/s?k=neurobion+forte",
    "https://www.flipkart.com/neurobion-forte-vitamin-b-complex-b12-tablets/p/itm15435b591e130",
    "https://www.onlinepharmacy.qa/Product/Neurobion-Tablets-30s/1966928179",
    "|||||",
    "https://www.watsons.com.my/vitamin-b-12-500mcg-100-s/p/BP_38851",
    "https://medicalweightlosscentersofamerica.com/where-to-buy-vitamin-b12/",
    "https://www.mic.com/life/best-b12-supplements",
    "https://www.mayoclinic.org/drugs-supplements-vitamin-b12/art-20363663",
    "https://www.mims.com/indonesia/drug/info/neurobion%20forte%205000?type=full",
    "https://www.watsons.com.my/vitamin-b1-b6-b12-60-s/p/BP_23859",
    "https://www.watsons.com.my/health-care/vitamins-minerals/c/110100",
    "https://www.watsons.com.my/vitamin-b-complex-3x15s/p/BP_64073",
    "https://www.watsons.com.my/health-care/vitamins/c/110101",
    "https://www.watsons.com.my/one-a-day-tablet-30-s/p/BP_22449",
    "https://www.watsons.com.my/search?text=vitamins",
    "https://www.watsons.com.my/product-categories/c/1?text=%3AproductBrandCode%3AproductBrandCode%3A165153&masterBrandCode=165153",
    "https://www.watsons.com.my/zinc-b-plus-10s/p/BP_50311",
    "https://www.watsons.com.my/bio-ace-plus-30s/p/BP_96497",
    "|||||",
    "https://shopee.com.my/GNC-VITAMIN-B6-100MG-100-TABLETS-i.53384175.6434290234",
    "https://www.lazada.com.my/tag/vitamin-b6-tablets/",
    "https://iprice.my/compare/blackmores-vitamin-b6-240mg/",
    "https://www.lacworldwide.com.my/en/gnc-vitamin-b6-100mg-00100470.html",
    "https://www.evitamins.com/my/vitamin-b6-pyridoxine",
    "https://www.mims.com/malaysia/drug/info/pyridoxine?mtype=generic",
    "https://www.watsons.com.my/vitamin-b1-b6-b12-60-s/p/BP_23859",
    "https://www.guardian.com.my/blackmores-executive-b-60-tablets.html",
    "https://www.guardian.com.my/blackmores-multi-b-120-tablets.html",
    "https://www.bigpharmacy.com.my/vitamin-b",
    "|||||",
    "https://www.watsons.com.my/vitamin-b1-b6-b12-60-s/p/BP_23859",
    "https://www.target.com/p/dolo-neurobion-extra-strength-pain-reliever-tablets-acetaminophen-30ct/-/A-52466408",
    "https://www.doctoroncall.com.my/medicine/en/supplements/neurobion-10s",
    "https://www.neurobion.com/en_PH/home/products/neurobionforte.html",
    "https://www.amazon.com/Dolo-Neurobion-30-Tablets-Reliever/dp/B0157A410W",
    "https://iprice.my/compare/neurobion-vitamin-b1-b6-b12/",
    "https://www.medicalnewstoday.com/articles/325447",
    "https://www.bigpharmacy.com.my/neurobion-tabs-60s-long-expiry",
    "https://clicks.co.za/neurobion_tablets-30-tablets/p/208052",
    "https://estore.caring2u.com/brands/neurobion",
    "|||||",
    "https://shopee.com.my/Vitamin-B1-B-1.-Thiamin-100mg-100-Tabs-100-Vegetarian-(Energy)-USA-i.10654932.217512937",
    "https://www.watsons.com.my/vitamin-b1-b6-b12-60-s/p/BP_23859",
    "https://www.moh.gov.my/moh/images/gallery/rni/6_chat.pdf",
    "https://www.mims.com/malaysia/drug/info/thiamine?mtype=generic",
    "https://www.lazada.com.my/tag/vitamin-b1-thiamine/",
    "https://www.lazada.com.my/tag/vitamin-b1-supplement/",
    "https://www.evitamins.com/my/vitamin-b1-thiamine",
    "https://productnation.co/my/28268/best-vitamin-b-complex-malaysia/",
    "https://health.family.my/vitamins-minerals/vitamins-b1",
    "https://iprice.my/compare/neurobion-vitamin-b1-b6-b12/",
    "|||||",
    "////////////",
    "https://www.ceriasihat.com/neurobion-penolong-terbaik-bagi-masalah-saraf-anda/",
    "https://www.doctoroncall.com.my/tanya//soalan/masalah-ubat-neurobion-bahaya-ke-tidak/39723",
    "https://www.alodokter.com/neurobion",
    "https://hellosehat.com/obat-suplemen/neurobion/",
    "https://www.neurobion.com/id_ID/halaman-utama/produk/neurobion.html",
    "https://www.neurobion.com/id_ID/home.html",
    "https://shopee.com.my/Neurobion-Vitamin-B1-B6-B12-Vitamin-bagi-sakit-saraf-dan-kebas-kaki-dan-tangan-30-tablets-i.23504609.4165033813",
    "https://thediagnosa.com/neurobion-fungsi-kesan-sampingan-dos/",
    "https://www.empj.com/neurobion-vitamin-b1-b6-dan-b12.html",
    "|||||",
    "https://iprice.my/compare/neurobion-vitamin-b1-b6-b12/",
    "https://iprice.my/neurobion/",
    "https://www.news24.com/health24/Experts/cyberdoc/Neurobian-shots-compared-to-BCO-20150209",
    "https://www.medicalnewstoday.com/articles/325447",
    "https://www.healthline.com/health/neurobion",
    "https://www.neurobion.com/en_ZA/home/product/where_to_buy.html",
    "https://www.watsons.com.my/vitamin-b1-b6-b12-60-s/p/BP_23859",
    "https://shopee.com.my/search?keyword=neurobion",
    "https://www.lazada.com.my/neurobion/",
    "https://www.lazada.com.my/tag/neurobion-vitamin/",
    "https://www.doctoroncall.com.my/medicine/en/supplements/neurobion-10s",
    "https://guardian.com.my/neurobion-60s-121091061.html",
    "https://estore.caring2u.com/brands/neurobion",
    "https://www.alpropharmacy.com/oneclick/product/neurobion-nerve-pain-relief-60s/",
    "|||||",
    "https://www.bigpharmacy.com.my/neurobion-tabs-60s-long-expiry",
    "https://www.bigpharmacy.com.my/product-detail?products_id=31054",
    "https://www.bigpharmacy.com.my/product-search-result?brand_id=610_781_1221_15_1351",
    "https://www.bigpharmacy.com.my/supplement-for-nerve",
    "https://www.bigpharmacy.com.my/product-search-result?range=4&brand_id=961_310_15_569_274_1143_454_1292",
    "https://www.bigpharmacy.com.my/product-search-result?range=4&brand_id=320_1400_358_946_826_1441_113_780_1515_1491_396_829_15_1334_454_1292",
    "https://www.bigpharmacy.com.my/vitamin-b",
    "https://www.bigpharmacy.com.my/product-search-result?range=4&brand_id=573_1178_686_791_829_15__454_1292",
    "https://www.bigpharmacy.com.my/product-search-result?range=4&brand_id=15_457_1419_1677_454_1292",
    "https://iprice.my/neurobion/",
    "|||||",
    "https://iprice.my/compare/neurobion-vitamin-b1-b6-b12/",
    "https://iprice.my/neurobion/",
    "https://www.watsons.com.my/vitamin-b1-b6-b12-60-s/p/BP_23859",
    "https://www.bigpharmacy.com.my/neurobion-tabs-60s-long-expiry",
    "https://www.empj.com/neurobion-vitamin-b1-b6-dan-b12.html",
    "https://www.alpropharmacy.com/oneclick/product/neurobion-nerve-pain-relief-60s/",
    "https://estore.caring2u.com/brands/neurobion",
    "https://www.pharmacy.gov.my/v2/ms/apps/drug-price",
    "https://ms-my.facebook.com/FarmasiGpharmaxKualaNerus/posts/neurobion-vitamin-b1-b6-b12-neurobion-bermanfaat-untuk-menjaga-kesihatan-sistem-/1171867839876806/",
    "|||||",
    "https://www.mims.com/malaysia/drug/info/neurobion?type=full",
    "https://www.doctoroncall.com.my/medicine/en/supplements/neurobion-10s",
    "https://www.medicalnewstoday.com/articles/325447",
    "https://www.healthline.com/health/neurobion",
    "https://www.neurobion.com/en_PH/home/products/neurobion.html",
    "https://www.medicoverhospitals.in/medicine/neurobionforte",
    "https://www.apollopharmacy.in/otc/neurobion-forte-tablet",
    "https://www.1mg.com/otc/neurobion-forte-tablet-otc356742",
    "https://theredclinic.com/product/neurobion-b1b6b12-10tabs/",
    "|||||",
    "https://www.alodokter.com/neurobion",
    "https://hellosehat.com/obat-suplemen/neurobion/",
    "https://www.merdeka.com/jateng/manfaat-neurobion-bagi-kesehatan-perhatikan-aturan-minum-dan-efek-sampingnya-kln.html",
    "https://thediagnosa.com/neurobion-fungsi-kesan-sampingan-dos/",
    "https://www.doctoroncall.com.my/tanya/soalan/masalah-ubat-neurobion-bahaya-ke-tidak/39723",
    "https://www.ubat.info/singapore-ms/neurobion-tablet",
    "https://www.ceriasihat.com/neurobion-penolong-terbaik-bagi-masalah-saraf-anda/",
    "https://lifepack.id/apa-saja-kandungan-dan-manfaat-suplemen-neurobion-bagi-tubuh/",
    "https://www.halodoc.com/obat-dan-vitamin/neurobion-10-tablet",
    "|||||",
    "https://guardian.com.my/neurobion-60s-121091061.html",
    "https://www.guardian.com.my/health/vitamins-supplements.html",
    "https://www.guardian.com.my/promotions/sbspc.html",
    "https://www.guardian.com.my/health.html",
    "https://www.guardian.com.sg/neurobion-tablets-30-tablets/p/160002",
    "https://www.guardian.com.sg/neurobion-value-pack-3x30-tablets/p/175015",
    "https://www.watsons.com.my/vitamin-b1-b6-b12-60-s/p/BP_23859",
    "https://iprice.my/compare/neurobion-vitamin-b1-b6-b12/",
    "|||||",
    "https://www.watsons.com.my/vitamin-b1-b6-b12-60-s/p/BP_23859",
    "https://www.watsons.com.my/product-categories/c/1?text=%3AproductBrandCode%3AproductBrandCode%3A165153&masterBrandCode=165153",
    "https://www.medicalnewstoday.com/articles/325447",
    "https://www.medicoverhospitals.in/medicine/neurobionforte",
    "https://www.neurobion.com/en_ZA/home/product/where_to_buy.html",
    "https://www.yashodahospitals.com/medicine-faqs/neurobion-forte/",
    "https://www.watsons.com.ph/product-categories/c/1?text=%3AproductBrandCode%3AproductBrandCode%3A165058&masterBrandCode=165058",
    "https://www.watsons.com.ph/b-vitamins-b1-b6-b12-tablet-30s/p/BP_50015669",
    "https://m.happyfresh.my/watsons-mid-valley/products/neurobion-vitamin-tablets-60-tablets-397138/",
    "https://www.happyfresh.my/watsons-sunway-pyramid/products/neurobion-vitamin-tablets-60-tablets-397138/",
    "https://www.neurobion.com/en_PH/home/products/neurobionforte.html",
    "https://www.facebook.com/WatsonsPH/photos/a.150645301639702/3336400363064164/?type=3",
    "https://www.guardian.com.sg/neurobion-tablets-30-tablets/p/160002",
    "|||||",
    "////////////",
    "https://bio-essence.com.my/",
    "https://www.facebook.com/bioessencemalaysia/",
    "https://www.watsons.com.my/product-categories/c/1?text=:productBrandCode:productBrandCode:153111&masterBrandCode=153111",
    "https://www.instagram.com/bioessence_my/?hl=en",
    "https://www.bioessence.com.sg/",
    "https://www.guardian.com.my/brands/brands-bio-essence/bio-gold-rose-gold.html",
    "https://www.hermo.my/brand/1041-bioessence",
    "|||||",
    "////////////",
  ],
  async scraper(browser, googleResultJSONList) {
    //initializing empty arrays to push into
    const JSONDataListPath = "./ahref.json";
    let result = [];
    let JSONDataList = [];

    //opening browser & going to url
    let page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 }); //setting wider viewport to load all products

    console.log("going to ahref login");
    try {
      await page.goto("https://app.ahrefs.com/user/login", {
        waitUntil: "networkidle2",
        timeout: 10000,
      });
    } catch (e) {
      console.log("cant go ahref for some reason");
    }

    //logging in w credentials
    await page.waitForSelector("input[name=email]");
    await page.type("input[name=email]", "franklin.winn@doctoroncall.com.my", {
      delay: 5,
    });
    await page.type("input[name=password]", "<INSERT YOUR PASSWORD HERE>"); // Password was removed due to security concerns - 11th Sept 2022 Dan & Sam
    await page.click(
      "#root > div > div > div > div.css-shut2q-contentBox > div > div > div > div > form > div > button"
    );
    await page.waitForNavigation({ waitUntil: "networkidle2" });

    for (const [key, detail] of Object.entries(googleResultJSONList)) {
      const urls = detail.href;
      for (let i = 0; i < urls.length; i++) {
        ahrefQuery = `https://app.ahrefs.com/positions-explorer/organic-keywords/v5/prefix/hk/all/all/all/all/all/all/all/1/traffic_desc?target=${encodeURIComponent(
          urls[i]
        )}`;
        let dataObj = [];
        await page.goto(ahrefQuery);
        tempvol = [];
        tempkd = [];
        tempcpc = [];
        temptraffic = [];

        noOfResults =
          (await page.$$("tr[name=site_explorer_data_rows]")).length / 2;

        dataObj.href = urls[i];

        dataObj.keyword =
          (await page.$$eval(
            ".keyword__with__serp > a",
            (kw) => kw.map((keyword) => keyword.textContent) //scraping all keyword volumes, removing commas
          )) || [];

        for (let i = 1; i <= noOfResults; i++) {
          dataObj.volume = await page.$$eval(
            `#row_id_${i} > td:nth-child(3)`,
            (v) => v.map((volume) => volume.textContent.trim())
          );
          tempvol.push(dataObj.volume);
          dataObj.volume = tempvol || [];

          dataObj.kd = await page.$$eval(
            `#row_id_${i} > td:nth-child(4)`,
            (k) => k.map((kd) => kd.textContent.trim())
          );
          tempkd.push(dataObj.kd);
          dataObj.kd = tempkd || [];

          dataObj.cpc = await page.$$eval(
            `#row_id_${i} > td:nth-child(5)`,
            (c) => c.map((cpc) => cpc.textContent.trim())
          );
          tempcpc.push(dataObj.cpc);
          dataObj.cpc = tempcpc || [];

          dataObj.traffic = await page.$$eval(
            `#row_id_${i} > td:nth-child(6)`,
            (t) => t.map((traffic) => traffic.textContent.trim())
          );
          temptraffic.push(dataObj.traffic);
          dataObj.traffic = temptraffic || [];
        }

        dataObj.position =
          (await page.$$eval(".position", (p) =>
            p.map((position) => position.textContent)
          )) || [];

        dataObj.url =
          (await page.$$eval(".truncate-break-all > a", (u) =>
            u.map((url) => url.href.toString())
          )) || [];

        dataObj.keyword = dataObj.keyword || [];
        dataObj.volume = dataObj.volume || [];
        dataObj.kd = dataObj.kd || [];
        dataObj.cpc = dataObj.cpc || [];
        dataObj.traffic = dataObj.traffic || [];
        dataObj.position = dataObj.position || [];
        dataObj.url = dataObj.url || [];

        console.log(dataObj);

        for (let i = 0; i < dataObj.keyword.length; i++) {
          JSONDataList.push({
            product_name: key,
            relatedsearch: detail["relatedsearch"],
            href: dataObj.href,
            keyword: dataObj.keyword[i],
            volume: dataObj.volume[i].toString(),
            kd: dataObj.kd[i].toString(),
            cpc: dataObj.cpc[i].toString(),
            traffic: dataObj.traffic[i].toString(),
            position: dataObj.position[i],
            url: dataObj.url[i],
          })
        }

        // dataObj.product_name = key;
        // dataObj.keyword = dataObj.keyword.join("\n");
        // dataObj.volume = dataObj.volume.join("\n");
        // dataObj.kd = dataObj.kd.join("\n");
        // dataObj.cpc = dataObj.cpc.join("\n");
        // dataObj.traffic = dataObj.traffic.join("\n");
        // dataObj.position = dataObj.position.join("\n");
        // dataObj.url = dataObj.url.join("\n");
        // totalData.push(dataObj);
      }
    }

    //   console.log(`Searching for ` + query+this.queries[query]);

    //   try {
    //   await page.waitForSelector(".EIaa9b", { timeout: 4000 });
    //   dataObj.relatedsearch = await page.$$eval(
    //     ".s75CSd",
    //     (rs) => rs.map((relatedsearch) => relatedsearch.textContent).toString() //scraping all keyword volumes, removing commas
    //   );
    // } catch (e) {
    //   console.log("No related searches button found.");
    //   dataObj.relatedsearch = "-"
    // }

    //   dataObj.product_name = this.queries[query];
    //   dataObj.relatedsearch = await page.$$eval(
    //     ".s75CSd",
    //     (rs) => rs.map((relatedsearch) => relatedsearch.textContent).toString() //scraping all keyword volumes, removing commas
    //   );

    //   dataObj.href = await page.$$eval(
    //       ".yuRUbf > a",
    //       (h)=>h.map((href)=>href.href.toString()).join("\n")
    //     );

    // console.log("dataObj is ");
    // console.log(dataObj);

    // dataObj.relatedsearch = dataObj.relatedsearch.join();
    // dataObj.href=dataObj.href.join();

    // console.log(dataObj.relatedsearch);

    // totalData.relatedsearch.push(dataObj.relatedsearch);
    // totalData.serp.push(dataObj.href);

    // console.log(totalData);

    //clicking "Log In" under searchbar
    //   await page.evaluate(() => {
    //     document.querySelectorAll(".___SText_17rlk-kmt_")[6].click();
    //   });

    //logging in w credentials
    //   await page.waitForSelector("input[name=email]");
    //   await page.type("input[name=email]", "seo@daikimedia.com", { delay: 50 });
    //   await page.type("input[name=password]", "Verycomplex2@");
    //   await page.click(".___SInner_cipg3_gg_");
    //   await page.waitForNavigation({ waitUntil: "networkidle2" });

    //   encodedQueries=this.queries.map((q)=>`https://www.semrush.com/analytics/keywordmagic/?q=${encodeURIComponent(q)}&db=my&type=exact`);

    // for each query in queries, search in keyword magic tool

    //         console.log(
    //           "Searching KMT for " + this.queries[query]
    //         );
    //         console.log(query)
    //         await page.goto(encodedQueries[query])
    //         result=[];
    //   try
    //       //waiting for magic keyword tool results
    //       {await page.waitForSelector('.sm-cell-phrase__text',{timeout:4000});}catch(e){
    //         console.log("No result found");
    //         let keyword=this.queries[query]
    //         dataObj.volume='0';
    //         dataObj.kd='-'
    //         result.push(keyword,dataObj.volume,dataObj.kd);
    //         totalData.push(result);
    //         continue;
    //       }

    //       //getting keyword & volume

    //       let queryresult = await page.$('.sm-cell-phrase__text')
    //       let keyword = await page.evaluate(q => q.textContent, queryresult)

    //       // result.keyword.push(keyword);

    //       dataObj.volume = await page.$$eval(".sm-table-layout__cell_align_right", (volumes) =>
    //           volumes.map((volume) => volume.textContent.replace(',','')) //scraping all keyword volumes, removing commas
    //         );
    //       dataObj.kd = await page.$$eval(".sm-cell-kd__data", (kds) =>
    //           kds.map((kd) => kd.textContent) //scraping all keyword volumes, removing commas
    //         );

    //       result.push(keyword,dataObj.volume[1],dataObj.kd[0]);
    // totalData.push(dataObj);

    // console.log("totaldata is ");
    // console.log(totalData)
    // console.log(totalData);

    //push all data as an array




    // JSONDataList = Object.entries(JSONDataList).forEach(function (obj) {
    //   const { google_urls, ...rest } = obj;
    //   console.log(google_urls);
    //   google_urls.map((el) => {
    //     console.log(el);
    //     href = el["href"];
    //     rest["href"] = href;
    //     el["refstats"].map(function (refstat) {
    //       console.log(refstat);
    //       rest[refstat["keyword"]] = refstat["keyword"];
    //       rest[refstat["volume"]] = refstat["volume"];
    //       rest[refstat["kd"]] = refstat["kd"];
    //       rest[refstat["cpc"]] = refstat["cpc"];
    //       rest[refstat["traffic"]] = refstat["traffic"];
    //       rest[refstat["position"]] = refstat["position"];
    //       rest[refstat["url"]] = refstat["url"];
    //     });
    //   });
    // });
    // saving to an excel file
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(JSONDataList);
    xlsx.utils.book_append_sheet(wb, ws);
    xlsx.writeFile(wb, "ahref.xlsx");

    console.log("Done!");
    browser.close();
  },
};
scrapeAll(startBrowser());
