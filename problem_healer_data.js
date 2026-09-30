/**
 * problem_healer_data.js
 * Comprehensive Multi-Diet Clinical & Ayurvedic Disease Database for PranaFit
 * Tailored protocols for Vegetarian, Non-Vegetarian, Vegan, and Fasting / Vrat
 */

window.PROBLEM_HEALING_DATABASE = {
  back_pain: {
    key: 'back_pain',
    badge: 'Lumbar Spine & Psoas',
    title: 'Lower Back Pain, Psoas Shortening & Lumbar Disc Compression',
    icon: '🧘',
    rootCause: 'Prolonged sitting (8+ hrs daily) deactivates the gluteus maximus while chronologically shortening the iliopsoas. This tugs the lumbar vertebrae into an unnatural hyper-lordosis, dramatically elevating intradiscal pressure on the L4-L5 and L5-S1 nerve roots.',
    ayurvedicDosha: 'Aggravated Vata in Asthi Dhatu (Bone & Joint degeneration caused by cold, dry, stagnant posture). Also manifests as "Kati Shula" with reduced lumbar lubrication.',
    whatToEatByDiet: {
      veg: [
        { food: 'Warm Golden A2 Cow Ghee (1 tsp with meals)', why: 'Lubricates Asthi (bone) channels and pacifies dry Vata nerve pinching.' },
        { food: 'Rich Moong Dal & Moringa Drumstick Soup', why: 'Packed with plant collagen co-factors, calcium, and bioavailable magnesium for disc rehydration.' },
        { food: 'Ashwagandha & Ginger Restorative Night Milk (A2 Cow Milk)', why: 'Potent natural COX-2 inhibitor reducing nerve root neuroinflammation and muscular spasms.' },
        { food: 'Roasted Sesame Seeds (Til Laddu or Tahini)', why: 'High organic plant calcium and zinc to nourish vertebral endplates.' }
      ],
      nonveg: [
        { food: 'Simmered Chicken Bone Broth with Ginger & Black Pepper', why: 'Rich in bioavailable type-II collagen peptides, chondroitin & hyaluronic acid to restore disc height.' },
        { food: 'Steamed Wild Salmon / Mackerel with Turmeric & Lemon', why: 'High anti-inflammatory marine EPA & DHA fatty acids that suppress arachidonic acid spinal cascades.' },
        { food: 'Soft Poached Organic Eggs with Spinach', why: 'Supplies complete leucine amino acids and sulfur to repair lumbar myofascial micro-tears.' },
        { food: 'Warm Spiced Turmeric Milk with Nutmeg', why: 'Promotes muscle relaxation and restful sleep.' }
      ],
      vegan: [
        { food: 'Cold-Pressed Black Sesame Oil (1 tsp on warm grain bowls)', why: 'Traditional Ayurvedic Vata pacifier packed with lignans and plant calcium.' },
        { food: 'Sprouted Green Moong & Moringa Leaf Clear Soup', why: 'Dense bioavailable zinc, silica, and amino acids to support collagen synthesis.' },
        { food: 'Raw Hemp Hearts & Ground Flaxseed Porridge', why: 'High plant alpha-linolenic acid (ALA) to calm surrounding nerve irritation.' },
        { food: 'Warm Golden Almond Milk with Ashwagandha & Ceylon Cinnamon', why: '100% dairy-free anti-inflammatory restorative beverage for spinal decompression.' }
      ],
      fasting: [
        { food: 'Warm Himalayan Rock Salt (Sendha Namak) Electrolyte Water', why: 'Replenishes cellular hydration to spinal discs without breaking fasting ketosis or autophagy.' },
        { food: 'Fresh Tender Coconut Water with Malai', why: 'Supplies natural intracellular potassium and isotonic hydration permitted in fasting.' },
        { food: 'Crunchy Roasted Makhana (Foxnuts) in 1/2 tsp Ghee with Rock Salt', why: 'Light fasting-safe snack providing plant protein and calming restless lumbar spasms.' },
        { food: 'Warm Cumin-Coriander-Fennel (CCF) Digestive Infusion', why: 'Carminative herbal infusion that eliminates trapped abdominal gas that places backward pressure on the lumbar spine.' }
      ]
    },
    whatToEat: [
      { food: 'Warm Golden A2 Cow Ghee or Cold-Pressed Sesame Oil (1 tsp with warm meals)', why: 'Lubricates Asthi (bone) channels and pacifies dry Vata nerve pinching.' },
      { food: 'Bone Broth or Rich Moong Dal Moringa Drumstick Soup', why: 'Contains bioavailable collagen peptides, hyaluronic acid, and glycine for disc rehydration.' },
      { food: 'Ashwagandha & Ginger Restorative Night Milk', why: 'Potent natural COX-2 inhibitor reducing nerve root neuroinflammation and muscle spasms.' },
      { food: 'Roasted Sesame Seeds (Til Laddu or Tahini)', why: 'Packed with organic plant calcium, zinc, and magnesium to prevent bone demineralization.' }
    ],
    foodsToAvoid: [
      { food: 'Refrigerated Cold Drinks & Raw Salads at Night', why: 'Exacerbates internal Vata dryness and contracts spinal musculature.' },
      { food: 'Deep-Fried Refined Maida Snacks & Trans Fats', why: 'Triggers systemic pro-inflammatory arachidonic acid cascades.' },
      { food: 'Excessive Nightshades (Eggplants, Raw Bell Peppers)', why: 'Contains solanine compounds that can sensitize inflamed musculoskeletal tissues.' }
    ],
    exercises: [
      {
        id: 'pose_cat_cow_remedial',
        name: 'Cat-Cow Spinal Undulation',
        sanskrit: 'Marjaryasana-Bitilasana',
        duration: '3.5 min',
        target: 'Lumbar Vertebral Decompression',
        cue: 'Inhale, drop belly toward floor while lifting chest. Exhale, tuck tailbone and arch entire spine upward like a dome.',
        benefit: 'Restores synovial fluid flow between vertebrae and breaks chronic erector spinae spasms.',
        animKey: 'cat_cow'
      },
      {
        id: 'pose_bridge_remedial',
        name: 'Glute Activation Bridge Pose',
        sanskrit: 'Setu Bandhasana',
        duration: '3.0 min',
        target: 'Posterior Chain Awakening',
        cue: 'Press heels firmly down. Drive hips toward ceiling by squeezing glutes, relieving lumbar compression.',
        benefit: 'Re-ignites dormant glutes so your lower back no longer carries walking loads.',
        animKey: 'bridge'
      },
      {
        id: 'pose_child_remedial',
        name: 'Supported Lumbar Child\'s Pose',
        sanskrit: 'Balasana with Wide Knees',
        duration: '3.0 min',
        target: 'Sacral Decompression',
        cue: 'Rest hips back on heels, walk fingertips forward, and take 10 slow diaphragmatic breaths into your lower back.',
        benefit: 'Gently stretches the thoracolumbar fascia and calms the autonomic nervous system.',
        animKey: 'childs_pose'
      }
    ],
    measuresToTake: [
      { measure: 'Belt-Line Lumbar Support', detail: 'Place a 2-inch rolled towel or ergonomic lumbar cushion behind your lower back while sitting at your desk.' },
      { measure: 'Thermal Protocol: Contrast Relief', detail: 'If acute sharp pain (<48h), apply ice wrapped in cloth for 12 mins. If dull muscular ache, apply warm moist towel for 15 mins.' },
      { measure: 'Acupressure Point BL-23 & BL-40', detail: 'Massage BL-23 (two fingers breadth from spine at belly-button level) and BL-40 (crease behind knee) for 60 seconds.' },
      { measure: 'Side Sleeping with Knee Pillow', detail: 'Sleep on your side with a firm pillow between knees to eliminate pelvic twist and spinal torque.' }
    ],
    clinicalRedFlags: [
      'Progressive muscle weakness, numbness, or loss of sensation in foot/toes (foot drop)',
      'Sudden loss of bowel or bladder control (Cauda Equina emergency - go to ER immediately)',
      'Constant unrelenting night pain that awakens you from sleep while lying completely flat',
      'Unexplained fever, chills, or sudden significant weight loss alongside spinal pain'
    ],
    healingRoadmap: {
      stage1: 'Days 1–2: Acute Spinal Decompression & Sub-threshold Gentle Movement',
      stage2: 'Days 3–5: Core Neuromuscular Re-patterning, Synovial Flow & Tissue Remodeling',
      stage3: 'Days 6–7+: Postural Resilience, Glute Firing & Recurrence Prevention'
    },
    recoveryMilestone: 'Noticeable ease in walking within 48 hours; 80% reduction in lumbar stiffness within 10 to 14 days of daily adherence.'
  },

  sciatica_nerve: {
    key: 'sciatica_nerve',
    badge: 'Sciatic Nerve & Piriformis',
    title: 'Sciatica & Radiating Nerve Pain (L5-S1 Impingement)',
    icon: '⚡',
    rootCause: 'Compression or inflammatory irritation of the sciatic nerve root (L4-S3) caused by a protruding lumbar disc or an over-tight, hypertonic piriformis muscle pinching the nerve trunk.',
    ayurvedicDosha: 'Gridhrasi (Classical Vata disorder manifesting as shooting, radiating pain traveling from the hip/buttock down the posterior thigh to the heel).',
    whatToEatByDiet: {
      veg: [
        { food: 'Warm Cow Ghee with Turmeric & Black Pepper', why: 'Curcumin with piperine acts as a natural neuro-protective agent, damping sciatic nerve irritability.' },
        { food: 'Garlic Simmered in A2 Milk (Lahsuna Ksheerapaka)', why: 'Classical Ayurvedic remedy that clears deep neuromuscular Vata blockages.' },
        { food: 'Methi (Fenugreek) Sprout Porridge', why: 'Anti-inflammatory glycosides that soothe peripheral nerve hypersensitivity.' },
        { food: 'Soaked Walnuts & Munakka', why: 'Nourishes the myelin sheath surrounding the long nerve roots.' }
      ],
      nonveg: [
        { food: 'Bone Broth Infused with Garlic & Ginger', why: 'Provides amino acids glycine & proline to heal the compressed fibrous nerve tunnel.' },
        { food: 'Steamed Fatty Fish (Rohu / Salmon / Mackerel)', why: 'High concentration of marine omega-3s to accelerate axonal nerve repair.' },
        { food: 'Soft Scrambled Eggs with Turmeric & Spinach', why: 'Choline and B-complex vitamins essential for peripheral nerve signal transmission.' },
        { food: 'Warm Spiced Bone Marrow Stew', why: 'Deeply grounding nourishment for severe radiating pain.' }
      ],
      vegan: [
        { food: 'Warm Sesame Oil on Food + Hemp Seed Chaat', why: 'Plant-based healthy fats that soothe peripheral nerve endings.' },
        { food: 'Sprouted Green Lentil & Garlic Stew', why: 'Natural sulfur and allicin to down-regulate neurogenic inflammation.' },
        { food: 'Flaxseed & Chia Seed Gel', why: 'Plant ALA omega-3 fatty acids for nerve membrane integrity.' },
        { food: 'Golden Almond Milk with Ashwagandha Root', why: 'Dairy-free neuro-adaptogen that dampens pain sensitization.' }
      ],
      fasting: [
        { food: 'Warm Pink Salt Water with Grated Ginger', why: 'Restores electrolyte balance while ginger acts as a natural analgesia.' },
        { food: 'Fresh Tender Coconut Water', why: 'Natural isotonic potassium to calm firing nerve endings.' },
        { food: 'Roasted Makhana with Rock Salt', why: 'Light fasting fuel that does not produce gas or bloating.' },
        { food: 'Ajwain (Carom) & Jeera Simmered Warm Infusion', why: 'Relieves downward pelvic pressure that irritates the sciatic notch.' }
      ]
    },
    whatToEat: [
      { food: 'Garlic Milk Decoction (Lahsuna Ksheerapaka)', why: 'Classical Ayurvedic remedy that clears deep neuromuscular Vata blockages.' },
      { food: 'Warm Ghee with Turmeric & Black Pepper', why: 'Suppresses inflammatory cytokines around the compressed sciatic nerve root.' },
      { food: 'Bone Broth or Sprouted Moong Soup', why: 'Supplies amino acids glycine & proline to heal connective nerve tunnels.' }
    ],
    foodsToAvoid: [
      { food: 'Cold, Carbonated & Icy Drinks', why: 'Causes instantaneous reflex constriction of deep gluteal and piriformis fibers.' },
      { food: 'Gas-Forming Raw Cruciferous Veggies (Raw Cabbage/Cauliflower)', why: 'Intestinal gas places direct retro-peritoneal mechanical pressure on sacral plexus nerves.' }
    ],
    exercises: [
      {
        id: 'pose_piriformis_release',
        name: 'Supine Figure-4 Piriformis Stretch',
        sanskrit: 'Supta Kapotasana',
        duration: '3.5 min',
        target: 'Deep Gluteal & Piriformis Release',
        cue: 'Lie on back, cross right ankle over left knee. Gently hug left hamstring toward chest until a deep soothing glute stretch is felt. Hold 45s per side.',
        benefit: 'Unlocks the muscular tunnel through which the sciatic nerve passes, halting radiating sensations.',
        animKey: 'bridge'
      },
      {
        id: 'pose_sciatic_nerve_glide',
        name: 'Sciatic Nerve Flossing / Slider',
        sanskrit: 'Nadi Sanchalana Dynamic',
        duration: '3.0 min',
        target: 'Neural Sheath Mobilization',
        cue: 'Sit on chair edge. Slump chin to chest as you straighten knee and point toes up. Lower foot as you look up. Perform 12 gentle rhythmic pumps.',
        benefit: 'Restores smooth gliding motion to the nerve within its sheath without aggravating tension.',
        animKey: 'cat_cow'
      }
    ],
    measuresToTake: [
      { measure: 'Never Sit on a Back-Pocket Wallet / Phone', detail: 'Sitting with an uneven pelvis directly impales the sciatic nerve into the ischial tuberosity.' },
      { measure: 'Warm Castor Oil Pack over Sacrum', detail: 'Apply warm castor oil to sacrum/buttock and cover with a hot water bag for 20 minutes before sleep.' },
      { measure: 'Acupressure Point GB-30 (Huantiao)', detail: 'Located one-third the distance between the greater trochanter and sacral hiatus; apply moderate thumb pressure for 90s.' },
      { measure: 'Avoid Forward Bending with Locked Straight Legs', detail: 'Always bend knees when picking up objects to prevent sudden nerve traction.' }
    ],
    clinicalRedFlags: [
      'Inability to lift your foot or toes upward when walking (foot drop causing stumbling)',
      'Numbness spreading to the groin or inner thighs (saddle anesthesia)',
      'New difficulty starting urination or sudden loss of bowel control (emergency)'
    ],
    healingRoadmap: {
      stage1: 'Days 1–2: Nerve Calming, Piriformis Decompression & Gentle Neural Flossing',
      stage2: 'Days 3–5: Gluteal Remodeling & Pelvic Symmetry Alignment',
      stage3: 'Days 6–7+: Core Spinal Stability & Progressive Loading'
    },
    recoveryMilestone: 'Radiating pain begins retreating back up toward the hip (centralization) in 3–5 days; full resolution in 2–3 weeks.'
  },

  neck_strain: {
    key: 'neck_strain',
    badge: 'Cervical & Trapezius',
    title: 'Tech-Neck Strain, Cervical Compression & Upper Back Spasm',
    icon: '💻',
    rootCause: 'Bending head forward at 30° to 45° over screens increases gravitational load on cervical vertebrae C5-C7 from 5 kg to over 22 kg, forcing upper trapezius and levator scapulae into chronic hypertonicity.',
    ayurvedicDosha: 'Aggravated Vata-Pitta in Mamsa (muscle tissue) and Majja Dhatu, producing sharp tension headaches, occipital throbbing, and neck stiffness ("Manya Stambha").',
    whatToEatByDiet: {
      veg: [
        { food: 'Magnesium-Rich Pumpkin & Sunflower Seeds', why: 'Essential cofactor for neuromuscular relaxation and muscular acetylcholine regulation.' },
        { food: 'Warm Turmeric Cinnamon Ginger Decoction', why: 'Inhibits inflammatory cytokines (TNF-alpha, IL-6) that cause muscle knots.' },
        { food: 'Boiled Sweet Potatoes with Ghee', why: 'Sustained grounding carbohydrates that replenish muscle glycogen and pacify Vata.' }
      ],
      nonveg: [
        { food: 'Clear Chicken Bone Broth with Ginger & Garlic', why: 'Collagen peptides repair strained cervical ligament attachments.' },
        { food: 'Steamed Fish with Turmeric & Lemon', why: 'Omega-3 fatty acids reduce trapezius muscle soreness.' },
        { food: 'Soft Boiled Organic Eggs', why: 'Complete protein and sulfur for muscular recovery.' }
      ],
      vegan: [
        { food: 'Hemp Seeds & Ground Flaxseeds in Oatmeal', why: 'Plant-derived anti-inflammatory fats for muscle recovery.' },
        { food: 'Warm Ginger-Turmeric Almond Milk', why: 'Eases neck tension and soothes cervical nerves.' },
        { food: 'Sprouted Moong & Vegetable Stew', why: 'Light, nutrient-rich plant protein.' }
      ],
      fasting: [
        { food: 'Warm Pink Salt Water with Crushed Ginger', why: 'Maintains muscle electrolyte balance and prevents neck cramping.' },
        { food: 'Tender Coconut Water', why: 'Supplies potassium to relax hypertonic trapezius fibers.' },
        { food: 'Cinnamon Tulsi Warm Tea', why: 'Promotes cranial circulation and calms muscle spasm.' }
      ]
    },
    whatToEat: [
      { food: 'Magnesium-Rich Pumpkin & Sunflower Seeds', why: 'Relaxes muscle fibers and regulates acetylcholine.' },
      { food: 'Warm Turmeric Cinnamon Ginger Decoction', why: 'Inhibits inflammatory cytokines.' },
      { food: 'Boiled Sweet Potatoes with Ghee', why: 'Replenishes muscle glycogen and calms Vata.' }
    ],
    foodsToAvoid: [
      { food: 'Excessive Caffeine (More than 2 cups)', why: 'Constricts cranial blood vessels and worsens muscular spasms.' },
      { food: 'Refined White Sugars & Pastries', why: 'Generates advanced glycation end-products that stiffen collagen.' }
    ],
    exercises: [
      {
        id: 'pose_wall_angels_remedial',
        name: 'Wall Angels Scapular Retraction',
        sanskrit: 'Scapular Kinetic Glide',
        duration: '3.0 min',
        target: 'Lower Trapezius & Serratus Anterior',
        cue: 'Back against wall, elbows and wrists touching wall. Slowly slide arms up into "Y" shape and pull down into "W".',
        benefit: 'Restores scapular rhythm and pulls rounded shoulders back into natural alignment.',
        animKey: 'wall_angels'
      },
      {
        id: 'pose_cat_cow_cervical',
        name: 'Cat-Cow with Cervical Release',
        sanskrit: 'Marjaryasana Cervical Focus',
        duration: '2.5 min',
        target: 'Upper Spine Mobilization',
        cue: 'Coordinate neck extension with inhalation and chin-to-chest tuck with exhalation.',
        benefit: 'Pumps fresh cerebrospinal fluid through cervical vertebrae.',
        animKey: 'cat_cow'
      }
    ],
    measuresToTake: [
      { measure: 'Raise Monitor to Eye Level', detail: 'Top third of your screen should align with your direct horizontal gaze.' },
      { measure: 'Chin Tuck Micro-Breaks', detail: 'Every 45 minutes, tuck chin straight back like making a double chin. Hold 5s, repeat 10 times.' },
      { measure: 'Warm Sesame Oil Neck Rub', detail: 'Warm cold-pressed sesame oil between palms and massage side neck down into collarbone.' },
      { measure: 'Acupressure Point GB-20 (Fengchi)', detail: 'Hollows at the base of the skull on both sides; massage upward with thumbs for 60 seconds.' }
    ],
    clinicalRedFlags: [
      'Numbness, tingling, or shooting electric pain radiating down arm into fingers',
      'Sudden loss of grip strength in hand (dropping cups or keys)',
      'Severe unremitting headache accompanied by fever or neck stiffness preventing chin-to-chest tuck'
    ],
    healingRoadmap: {
      stage1: 'Days 1–2: Postural Unloading, Eye-Level Screen Alignment & Cryo-Relief',
      stage2: 'Days 3–5: Deep Cervical Flexor Activation & Scapular Gliding',
      stage3: 'Days 6–7+: Upper Thoracic Extension & Ergonomic Habit Anchoring'
    },
    recoveryMilestone: 'Trapezius muscle spasm subsides within 48 hours; full cervical range of motion restored in 7 to 10 days.'
  },

  cervical_spondylosis: {
    key: 'cervical_spondylosis',
    badge: 'Cervical Spine & Radiculopathy',
    title: 'Cervical Spondylosis, Arm Tingling & Disc Dehydration',
    icon: '🦴',
    rootCause: 'Age- or posture-related wear and tear affecting spinal discs in the neck. As discs dehydrate and shrink, bone spurs (osteophytes) develop, narrowing the neural foramina and impinging on cervical nerve roots C5-C7.',
    ayurvedicDosha: 'Griva Hundana / Asthi-Majja Kshaya (Vata aggravation causing dryness, bone spur formation, and radiating nerve irritation in the upper extremities).',
    whatToEatByDiet: {
      veg: [
        { food: 'Warm Cow Ghee with Pinch of Turmeric & Black Pepper', why: 'Penetrates Asthi Dhatu to nourish vertebral margins.' },
        { food: 'Rich Moong Dal Moringa Drumstick Soup', why: 'High natural silica and bioavailable calcium to support bone matrix.' },
        { food: 'Ashwagandha & Ginger Night Milk', why: 'Combats nerve root neuroinflammation.' }
      ],
      nonveg: [
        { food: 'Slow-Cooked Chicken Bone Broth', why: 'Rich in collagen type-I & II and glycosaminoglycans to rehydrate spinal discs.' },
        { food: 'Steamed Salmon with Turmeric', why: 'Essential omega-3s to prevent neural inflammation.' },
        { food: 'Soft Poached Eggs', why: 'Provides sulfur and choline for myelin sheath preservation.' }
      ],
      vegan: [
        { food: 'Black Sesame Seeds & Tahini', why: 'Unsurpassed plant calcium and healthy fats for bone health.' },
        { food: 'Warm Golden Almond Milk with Ashwagandha', why: 'Dairy-free nerve-toning elixir.' },
        { food: 'Sprouted Green Moong & Spinach Soup', why: 'Supplies magnesium and non-heme iron.' }
      ],
      fasting: [
        { food: 'Warm Himalayan Rock Salt Water with Ginger', why: 'Maintains optimal nerve conductivity and electrolyte balance.' },
        { food: 'Tender Coconut Water', why: 'Supplies potassium to prevent muscle splinting.' },
        { food: 'Cumin & Cardamom Warm Tea', why: 'Carminative and soothing for systemic Vata.' }
      ]
    },
    whatToEat: [
      { food: 'Warm Cow Ghee with Turmeric', why: 'Penetrates bone channels to lubricate neck joints.' },
      { food: 'Moong Dal & Moringa Soup', why: 'High calcium and silica.' },
      { food: 'Ashwagandha Restorative Night Milk', why: 'Reduces nerve root inflammation.' }
    ],
    foodsToAvoid: [
      { food: 'Raw, Cold & Dry Foods at Night', why: 'Aggravates Vata dryness in cervical discs.' },
      { food: 'Refined White Flours (Maida) & Fried Foods', why: 'Promotes systemic inflammatory cytokines.' }
    ],
    exercises: [
      {
        id: 'pose_cervical_isometric',
        name: 'Isometric Cervical Neck Strengthening',
        sanskrit: 'Griva Sthirata Isometric',
        duration: '3.0 min',
        target: 'Deep Neck Flexor Stabilizers',
        cue: 'Place palm against forehead. Press forehead gently into palm without letting head move. Hold 5s. Repeat on back and sides of head.',
        benefit: 'Strengthens cervical stabilizer muscles without moving worn joint surfaces.',
        animKey: 'pranayama'
      },
      {
        id: 'pose_scapular_shrug_roll',
        name: 'Shoulder Blade Rolls & Retractions',
        sanskrit: 'Skandha Chakra Dynamic',
        duration: '2.5 min',
        target: 'Thoracic-Cervical Junction Unloading',
        cue: 'Roll shoulders up, back, down, and around in slow smooth circles. Breathe deeply.',
        benefit: 'Releases compensatory tension in upper trapezius and rhomboids.',
        animKey: 'wall_angels'
      }
    ],
    measuresToTake: [
      { measure: 'Cervical Contour Pillow', detail: 'Use a memory foam contour pillow that supports the natural inward curve of your neck while sleeping.' },
      { measure: 'Warm Mahanarayan Oil Massage', detail: 'Gently rub warm herbal oil down the back of the neck and top of shoulders before a warm shower.' },
      { measure: 'Avoid Carrying Heavy Bags on One Shoulder', detail: 'Distribute loads evenly with a backpack or cross-body strap.' },
      { measure: 'Acupressure Point LI-4 & GB-20', detail: 'Press webbing of thumb and base of skull hollows for 60 seconds.' }
    ],
    clinicalRedFlags: [
      'Clumsiness in hands (difficulty buttoning shirts or tying shoes)',
      'Feeling uncoordinated or unsteady on your feet when walking',
      'Electric shock sensations traveling down spine when bending neck forward (Lhermitte sign)'
    ],
    healingRoadmap: {
      stage1: 'Days 1–2: Cervical Rest, Proper Ergonomic Pillow Setup & Gentle Heat',
      stage2: 'Days 3–5: Deep Neck Flexor Isometric Stabilization & Neural Flossing',
      stage3: 'Days 6–7+: Thoracic Spine Mobility & Scapular Re-education'
    },
    recoveryMilestone: 'Arm tingling and morning neck stiffness reduce within 5–7 days; sustained cervical stabilization in 3 weeks.'
  },

  acid_reflux: {
    key: 'acid_reflux',
    badge: 'Gastrointestinal & GERD',
    title: 'Acid Reflux, Heartburn, GERD & Upper Abdominal Bloating',
    icon: '🔥',
    rootCause: 'Transient Lower Esophageal Sphincter (LES) relaxations, low gastric mucosal barrier, delayed stomach emptying, and hiatal pressure aggravated by late meals and emotional stress.',
    ayurvedicDosha: 'Amlapitta (Severe Pitta aggravation characterized by sour belching, burning in the chest and throat, and impaired Pachaka Pitta).',
    whatToEatByDiet: {
      veg: [
        { food: 'Fresh Tender Coconut Water (Mid-morning)', why: 'Alkaline pH of 5.5–6.0 instantly coats esophageal mucosa and neutralizes stomach acid.' },
        { food: 'Soaked Basil / Sabja Seeds in Water', why: 'Natural mucilaginous coating that shields gastric lining from hydrochloric acid irritation.' },
        { food: 'Cooling Cumin-Coriander-Fennel (CCF) Tea', why: 'Directly stimulates bile flow without aggravating Pitta fire.' },
        { food: 'Bottle Gourd (Lauki) & Golden Moong Khichdi', why: 'Gentle alkaline nutrition that empties from the stomach in under 90 minutes.' }
      ],
      nonveg: [
        { food: 'Light Poached White Fish in Coconut Broth', why: 'Lean, ultra-low-fat protein that does not delay gastric emptying or trigger bile reflux.' },
        { food: 'Clear Shredded Chicken Ginger Soup', why: 'Mild ginger promotes gastric motility without provoking acid secretion.' },
        { food: 'Steamed Egg Whites with Rock Salt', why: 'Pure albumin protein with zero fat to cause LES sphincter relaxation.' },
        { food: 'Fresh Coconut Water & Fennel Tea', why: 'Alkalizing intra-day hydrators.' }
      ],
      vegan: [
        { food: 'Fresh Ash Gourd (Petha) Juice on Empty Stomach', why: 'The most alkaline therapeutic juice known in Ayurveda; quenches gastric acid in 10 minutes.' },
        { food: 'Soaked Chia & Sabja Seed Gel', why: 'Soluble mucilage coats gastric walls.' },
        { food: 'Steamed Moong Dal & Bottle Gourd Khichdi', why: 'Easy gastrointestinal transit.' },
        { food: 'Cooling Fennel & Licorice (Mulethi) Infusion', why: 'Deglycyrrhizinated licorice stimulates protective stomach mucus secretion.' }
      ],
      fasting: [
        { food: 'Fresh Coconut Water with a Pinch of Rock Salt', why: 'Immediate acid neutralization permitted on any fast.' },
        { food: 'Fennel Seed (Saunf) Steeped Warm Water', why: 'Relaxes digestive smooth muscle without calories.' },
        { food: 'Raw Soaked Sabja Seeds in Water', why: 'Protective mucilaginous shield for empty stomach.' },
        { food: 'Boiled Sweet Potato cubes (if Phalahar)', why: 'Absorbs excess acid without fermentation.' }
      ]
    },
    whatToEat: [
      { food: 'Fresh Tender Coconut Water', why: 'Alkaline pH coats esophageal mucosa and neutralizes stomach acid.' },
      { food: 'Soaked Basil (Sabja) Seeds in Water', why: 'Forms protective gel lining.' },
      { food: 'Cumin-Coriander-Fennel (CCF) Tea', why: 'Soothes digestive fire and relieves bloating.' }
    ],
    foodsToAvoid: [
      { food: 'Late Night Eating (Less than 3 hours before bed)', why: 'Horizontal posture allows stomach acid to pool directly against the open esophagus.' },
      { food: 'Raw Tomatoes, Onions, Citrus & Vinegar', why: 'Directly irritates inflamed esophageal squamous epithelium.' },
      { food: 'Deep-Fried Savories (Pakoras, Samosas) & Chocolate', why: 'High fat and methylxanthines chemically force the LES sphincter open.' }
    ],
    exercises: [
      {
        id: 'pose_vajrasana_remedial',
        name: 'Thunderbolt Pose (Vajrasana)',
        sanskrit: 'Vajrasana Post-Meal Alignment',
        duration: '5.0 min (Immediately after meals)',
        target: 'Gastric Motility & Vagus Nerve Stimulation',
        cue: 'Sit on heels with spine straight and hands on knees. Breathe deeply into your lower abdomen.',
        benefit: 'The ONLY yoga pose recommended immediately after eating. Redirects blood flow to pelvic and gastric viscera.',
        animKey: 'pranayama'
      },
      {
        id: 'pose_wind_relieving',
        name: 'Gentle Wind-Relieving Single Leg Hug',
        sanskrit: 'Ardha Pavanamuktasana',
        duration: '3.0 min (Empty stomach only)',
        target: 'Transverse Colon Decompression',
        cue: 'Lie on back, hug right knee to chest while keeping left leg extended. Hold 5 breaths, switch.',
        benefit: 'Discharges trapped retro-peritoneal gas bubbles that push the stomach upward against the diaphragm.',
        animKey: 'childs_pose'
      }
    ],
    measuresToTake: [
      { measure: 'Elevate Head of Bed by 6 Inches', detail: 'Place bed risers under the headboard posts so gravity naturally prevents nocturnal reflux.' },
      { measure: 'Sleep Exclusively on Your Left Side', detail: 'Left-side sleeping keeps the gastroesophageal junction above gastric acid level.' },
      { measure: 'Never Drink Large Gulp of Water During Meals', detail: 'Sip only small warm sips; large volumes dilute hydrochloric acid and balloon the stomach.' },
      { measure: 'Acupressure Point PC-6 (Neiguan) & CV-12', detail: 'Three finger-widths above the wrist crease between tendons; press for 90s for nausea & reflux.' }
    ],
    clinicalRedFlags: [
      'Difficulty or pain when swallowing food (dysphagia)',
      'Vomiting blood or coffee-ground material, or passing black tarry stools',
      'Unexplained weight loss or feeling full after only a few bites of food',
      'Chest pain radiating down left arm or jaw (always rule out cardiac causes first)'
    ],
    healingRoadmap: {
      stage1: 'Days 1–2: Gastric Mucosal Soothing, Left-Side Sleep & 3-Hour Dinner Gap',
      stage2: 'Days 3–5: Lower Esophageal Sphincter Toning & Post-Meal Vajrasana',
      stage3: 'Days 6–7+: Balanced Agni Restoration & Digestive Enzyme Optimization'
    },
    recoveryMilestone: 'Heartburn and night sour reflux subside in 48 hours; complete esophageal healing in 10 to 14 days.'
  },

  pcos_hormone: {
    key: 'pcos_hormone',
    badge: 'Endocrine & Ovarian',
    title: 'PCOS, Insulin Resistance, Hormonal Imbalance & Irregular Cycles',
    icon: '🩸',
    rootCause: 'Hyperinsulinemia driving ovarian theca cells to overproduce androgens (testosterone), preventing follicular rupture and causing anovulation, cyst formation, cystic acne, and visceral adiposity.',
    ayurvedicDosha: 'Artava Kshaya / Kaphaja Granthi (Kapha-Vata blockage in Artavavaha Srotas, obstructing the natural flow of menstrual fluids and ovulatory heat).',
    whatToEatByDiet: {
      veg: [
        { food: 'Spearmint & Ceylon Cinnamon Tea (Twice Daily)', why: 'Clinical studies show spearmint reduces free testosterone by 30% and cinnamon improves insulin receptor sensitivity.' },
        { food: 'Seed Cycling Protocol (Flax + Pumpkin seeds in Follicular phase; Sesame + Sunflower in Luteal)', why: 'Provides targeted lignans and zinc to balance estrogen and progesterone naturally.' },
        { food: 'Methi (Fenugreek) Seed Water on Empty Stomach', why: 'Trigonelline compound increases GLUT-4 glucose transporters to reverse insulin resistance.' },
        { food: 'Sprouted Green Moong & Leafy Greens Bowl', why: 'High folate and B-complex vitamins supporting ovarian cellular mitosis.' }
      ],
      nonveg: [
        { food: 'Wild Salmon or Mackerel (Rich in EPA/DHA Omega-3)', why: 'Reduces ovarian stromal inflammation and lowers systemic androgens.' },
        { food: 'Pasture-Raised Organic Eggs (Boiled or Poached)', why: 'High in choline and inositol isomers critical for healthy follicular maturation.' },
        { food: 'Clear Chicken Stew with Turmeric & Broccoli', why: 'Broccoli provides DIM (diindolylmethane) to help the liver metabolize excess estrogen.' },
        { food: 'Spearmint Tea with Cinnamon', why: 'Anti-androgenic herbal elixir.' }
      ],
      vegan: [
        { food: 'Organic Tofu & Tempeh with Cruciferous Greens', why: 'Supplies clean plant protein and DIM for balanced estrogen metabolism.' },
        { food: 'Seed Cycling Protocol (Flax, Pumpkin, Sesame, Sunflower)', why: 'Essential fatty acids and plant lignans for ovulatory cycle regularity.' },
        { food: 'Spearmint Herbal Tea & Ceylon Cinnamon Decoction', why: 'Lowers androgen levels and balances insulin response.' },
        { food: 'Hemp Seeds & Sprouted Lentils', why: 'Rich in zinc and magnesium for progesterone support.' }
      ],
      fasting: [
        { food: 'Cinnamon & Fenugreek Warm Infusion', why: 'Drives insulin sensitivity down without calories during fasting window.' },
        { food: 'Fresh Coconut Water (When Breaking Fast)', why: 'Restores cellular hydration without blood glucose surges.' },
        { food: 'Soaked Chia & Pumpkin Seeds in Water', why: 'Healthy fats and zinc permitted in fasting regimes.' }
      ]
    },
    whatToEat: [
      { food: 'Spearmint & Ceylon Cinnamon Tea', why: 'Reduces free testosterone and improves insulin sensitivity.' },
      { food: 'Seed Cycling (Flax, Pumpkin, Sesame, Sunflower)', why: 'Supports estrogen and progesterone balance.' },
      { food: 'Methi (Fenugreek) Seed Water', why: 'Improves glucose receptor sensitivity.' }
    ],
    foodsToAvoid: [
      { food: 'Refined Sugar, High-Fructose Corn Syrup & White Rice at Night', why: 'Triggers massive insulin spikes that immediately stimulate ovarian androgen synthesis.' },
      { food: 'Commercial Dairy with Added Hormones', why: 'Contains insulin-like growth factor-1 (IGF-1) that exacerbates cystic acne and hirsutism.' }
    ],
    exercises: [
      {
        id: 'pose_baddha_konasana_remedial',
        name: 'Bound Angle Butterfly Pose (Baddha Konasana)',
        sanskrit: 'Supta Baddha Konasana Supported',
        duration: '4.5 min',
        target: 'Pelvic Floor & Ovarian Vascularization',
        cue: 'Soles of feet together, knees drop outward comfortably. Place hands on lower abdomen and breathe deeply.',
        benefit: 'Massively increases micro-circulation to ovarian and uterine arterial arcades.',
        animKey: 'butterfly'
      },
      {
        id: 'pose_malasana_remedial',
        name: 'Deep Garland Squat (Malasana)',
        sanskrit: 'Malasana Pelvic Opener',
        duration: '3.0 min',
        target: 'Apana Vayu Downward Flow',
        cue: 'Deep squat with heels flat (or supported on folded blanket), elbows pressing inner knees wide, chest tall.',
        benefit: 'Stimulates Apana Vayu to restore healthy, unblocked monthly menstrual shedding.',
        animKey: 'squat'
      }
    ],
    measuresToTake: [
      { measure: 'Castor Oil Abdominal Compress (Non-Bleeding Days Only)', detail: 'Warm castor oil pack over lower abdomen for 30 minutes 3 times a week to soften ovarian pelvic adhesions.' },
      { measure: 'Sunlight Exposure Before 9:00 AM', detail: '20 minutes of morning sunlight resets circadian LH/FSH pulse frequency from the pituitary gland.' },
      { measure: 'Low-Impact Resistance Workouts', detail: 'Engage large muscle groups (glutes/quads) to pull circulating glucose out of bloodstream.' },
      { measure: 'Acupressure Point SP-6 (Sanyinjiao)', detail: 'Four finger-widths above the inner ankle bone; massage with firm thumb pressure for 90 seconds daily.' }
    ],
    clinicalRedFlags: [
      'Extremely heavy bleeding (soaking through more than one pad an hour for 2+ consecutive hours)',
      'Sudden sharp, severe, one-sided lower pelvic pain (rule out ovarian torsion or ruptured cyst)',
      'Sudden severe dizziness, shortness of breath, or pale clammy skin during heavy cycles'
    ],
    healingRoadmap: {
      stage1: 'Days 1–2: Insulin Sensitivity Reset & Pelvic Lymphatic Mobilization',
      stage2: 'Days 3–5: Hormonal Detoxification & Ovarian Circulation Boost',
      stage3: 'Days 6–7+: Ovulatory Rhythmic Anchoring & Endocrine Synchronization'
    },
    recoveryMilestone: 'Insulin cravings drop within 5 days; skin clarifies and menstrual rhythm stabilizes in 4 to 8 weeks.'
  },

  insomnia: {
    key: 'insomnia',
    badge: 'Neuro-Circadian & Pineal',
    title: 'Circadian Insomnia, Racing Mind, Restless Sleep & Night Waking',
    icon: '🌙',
    rootCause: 'Disrupted suprachiasmatic nucleus (SCN) circadian signaling caused by late-night artificial blue light, elevated nocturnal cortisol, and suppressed pineal melatonin release.',
    ayurvedicDosha: 'Aggravated Prana Vata and Tarpaka Kapha depletion leading to "Anidra" (hyperactive mind with restless motor agitation).',
    whatToEatByDiet: {
      veg: [
        { food: 'Warm Spiced A2 Milk with Nutmeg (Jaiphal) & Cardamom', why: 'Contains high tryptophan and natural myristicin which acts as an organic sedative on cerebral GABA receptors.' },
        { food: 'Soaked Almonds & Chamomile Tea (1 hour before bed)', why: 'High magnesium relaxes vascular and muscular tension.' },
        { food: 'Light Moong Khichdi with Pure Cow Ghee for Dinner', why: 'Easy digestion prevents night cortisol surges caused by gut fermentation.' }
      ],
      nonveg: [
        { food: 'Warm Clear Bone Broth with Ginger (Dinner)', why: 'High concentration of glycine, an inhibitory neurotransmitter that lowers core body temperature for deep sleep.' },
        { food: 'Steamed Wild Fish with Roasted Sweet Potato', why: 'Natural vitamin B6, tryptophan, and complex carbs that trigger immediate melatonin conversion.' },
        { food: 'Chamomile & Cardamom Herbal Infusion', why: 'Relaxes somatic neuromuscular tone.' }
      ],
      vegan: [
        { food: 'Warm Golden Almond Milk with Nutmeg & Saffron', why: 'Dairy-free plant tryptophan and magnesium.' },
        { food: 'Tart Cherry Juice with Soaked Chia Seeds', why: 'One of the few natural plant sources of bioactive melatonin.' },
        { food: 'Steamed Pumpkin & Lentil Soup with Cumin', why: 'Grounding complex carbohydrates that soothe Vata restlessness.' }
      ],
      fasting: [
        { food: 'Chamomile & Fennel Warm Tea (0 kcal)', why: 'Relaxes smooth muscle and suppresses nocturnal hunger pangs.' },
        { food: 'Warm Water with Pinch of Pink Salt & Cardamom', why: 'Ensures cellular hydration and prevents night calf cramps.' },
        { food: 'Nutmeg-Infused Hot Water', why: 'A pinch of grated nutmeg in hot water induces deep neurological tranquility without breaking fast.' }
      ]
    },
    whatToEat: [
      { food: 'Warm Spiced Milk with Nutmeg (Jaiphal)', why: 'Natural myristicin promotes GABA release.' },
      { food: 'Soaked Almonds & Chamomile Tea', why: 'Magnesium relaxes neural tension.' },
      { food: 'Light Moong Khichdi with Ghee', why: 'Gentle digestion protects sleep architecture.' }
    ],
    foodsToAvoid: [
      { food: 'Caffeine after 2:00 PM (Coffee, Dark Teas, Energy Drinks)', why: 'Caffeine has a 6-hour half-life and blocks cerebral adenosine receptors needed to feel sleepy.' },
      { food: 'Heavy Spicy Dinners & Late Alcohol', why: 'Alcohol fragments REM sleep and causes rebound night awakenings at 3:00 AM.' }
    ],
    exercises: [
      {
        id: 'pose_legs_up_wall',
        name: 'Legs-Up-The-Wall Restorative Pose',
        sanskrit: 'Viparita Karani with Eye Pillow',
        duration: '6.0 min (Before bed)',
        target: 'Parasympathetic Vagal Dominance',
        cue: 'Sit close to wall, swing legs up against wall, lie back with arms relaxed at sides. Close eyes and breathe softly.',
        benefit: 'Triggers the baroreceptor reflex, dropping heart rate and switching brainwaves from Beta to Alpha/Theta.',
        animKey: 'childs_pose'
      },
      {
        id: 'pose_brahmari_pranayama',
        name: 'Humming Bee Breath (Brahmari Pranayama)',
        sanskrit: 'Brahmari Pranayama',
        duration: '4.0 min',
        target: 'Nitric Oxide & Pineal Resonance',
        cue: 'Close ears with thumbs, eyes with fingers. Inhale deep, exhale with a steady low pitch "Mmmmm" hum.',
        benefit: 'Vibrational frequency quiets amygdala activity and boosts endogenous melatonin.',
        animKey: 'pranayama'
      }
    ],
    measuresToTake: [
      { measure: 'Foot Sole Sesame Oil Massage (Pada Abhyanga)', detail: 'Rub warm sesame oil into the soles of your feet for 3 minutes before sleeping; grounds erratic Prana Vata instantly.' },
      { measure: 'Complete Digital Blackout 60 Mins Before Sleep', detail: 'No smartphones, TVs, or laptops in bed; keep bedroom completely dark and cool (19–21°C).' },
      { measure: 'Acupressure Point HT-7 (Shenmen) & Anmian', detail: 'Press crease of wrist in line with pinky finger for 90 seconds on each wrist before closing eyes.' },
      { measure: '4-7-8 Breathing in Bed', detail: 'Inhale for 4s, hold for 7s, exhale slowly through mouth for 8s. Repeat 6 cycles.' }
    ],
    clinicalRedFlags: [
      'Loud chronic snoring accompanied by gasping or pauses in breathing (suspected Sleep Apnea)',
      'Severe restless legs syndrome with irresistible urge to move legs that prevents any rest',
      'Severe daytime microsleeps while driving or operating machinery'
    ],
    healingRoadmap: {
      stage1: 'Days 1–2: Digital Sunset, Pada Abhyanga & Core Body Temperature Lowering',
      stage2: 'Days 3–5: Endogenous Melatonin Re-anchoring & Evening Parasympathetic Breathing',
      stage3: 'Days 6–7+: Deep Non-REM Delta Sleep Restoration & Circadian Synchronization'
    },
    recoveryMilestone: 'Sleep latency drops to under 20 minutes within 3 nights; uninterrupted deep sleep restored in 7 to 10 days.'
  },

  knee_joint: {
    key: 'knee_joint',
    badge: 'Articular Cartilage & Meniscus',
    title: 'Knee Joint Pain, Patellofemoral Crepitus & Morning Stiffness',
    icon: '🦵',
    rootCause: 'Wear of articular hyaline cartilage, diminished synovial fluid, weak vastus medialis oblique (VMO), and tight hamstrings/calves pulling the patella off-center.',
    ayurvedicDosha: 'Janu Sandhigata Vata (Cartilage and joint degeneration with loss of Shleshaka Kapha lubricant, causing creaking and painful friction).',
    whatToEatByDiet: {
      veg: [
        { food: 'Warm Golden Cow Milk with Curcumin & Black Pepper', why: 'Potent joint-protective polyphenol that slows cartilage matrix degradation.' },
        { food: 'Soaked Walnuts & Chia Seeds (Rich in ALA)', why: 'Essential plant fatty acids that reduce joint friction.' },
        { food: 'Sprouted Methi (Fenugreek) Powder with Warm Water', why: 'Anti-inflammatory glycosides traditional for joint flexibility.' },
        { food: 'Moong Dal with Moringa Drumsticks', why: 'Supplies bioavailable silica and calcium.' }
      ],
      nonveg: [
        { food: 'Rich Bovine or Chicken Bone Broth with Marrow', why: 'Packed with collagen peptides, glucosamine & chondroitin that stimulate chondrocyte repair.' },
        { food: 'Wild Salmon or Mackerel (High EPA/DHA Omega-3)', why: 'Powerful marine anti-inflammatory that halts cartilage enzymic breakdown.' },
        { food: 'Soft Boiled Organic Eggs with Turmeric', why: 'Sulfur-containing amino acids required for proteoglycan synthesis in cartilage.' },
        { food: 'Steamed Fish Soup with Ginger & Garlic', why: 'Nourishing, warming and anti-inflammatory.' }
      ],
      vegan: [
        { food: 'Cold-Pressed Flaxseed Oil & Sesame Seeds', why: 'Provides essential plant fatty acids and high organic calcium.' },
        { food: 'Sprouted Green Moong & Drumstick Soup', why: 'Silica, zinc, and amino acids to maintain synovial fluid integrity.' },
        { food: 'Turmeric Ginger Restorative Tea with Black Pepper', why: 'Natural COX-2 inhibitor reducing knee inflammation.' },
        { food: 'Raw Hemp Hearts on Salads', why: 'Rich in GLA (gamma-linolenic acid) for joint comfort.' }
      ],
      fasting: [
        { food: 'Warm Water with Turmeric, Ginger & Pinch of Rock Salt', why: 'Suppresses inflammatory prostaglandins without breaking fast.' },
        { food: 'Tender Coconut Water', why: 'Natural potassium and magnesium for joint tissues.' },
        { food: 'Roasted Makhana with Rock Salt (if Fasting)', why: 'Provides plant calcium without heavy digestive load.' }
      ]
    },
    whatToEat: [
      { food: 'Golden Turmeric Milk with Black Pepper', why: 'Reduces joint inflammation and protects cartilage.' },
      { food: 'Soaked Walnuts & Chia Seeds', why: 'Provides omega-3s for joint lubrication.' },
      { food: 'Bone Broth or Moong Dal Moringa Soup', why: 'Contains collagen and glycosaminoglycans.' }
    ],
    foodsToAvoid: [
      { food: 'Excessive Nightshades (Raw Eggplants, Bell Peppers)', why: 'Contains solanine that can irritate sensitive arthritic joints.' },
      { food: 'Deep-Fried Savories & Refined Vegetable Oils', why: 'High omega-6 to omega-3 ratio accelerates cartilage degradation.' }
    ],
    exercises: [
      {
        id: 'pose_isometric_quads',
        name: 'Isometric Quad Sets & Straight Leg Raises',
        sanskrit: 'Quadriceps Stabilizer',
        duration: '3.0 min',
        target: 'Vastus Medialis Oblique (VMO)',
        cue: 'Sit tall, tighten front thigh muscle to press back of knee flat to floor. Hold 8s, release.',
        benefit: 'Strengthens knee stabilizers without creating patellofemoral friction.',
        animKey: 'bridge'
      },
      {
        id: 'pose_bridge_knee',
        name: 'Glute Bridge with Neutral Knees',
        sanskrit: 'Setu Bandhasana Alignment',
        duration: '3.0 min',
        target: 'Hamstring & Hip Synergy',
        cue: 'Keep knees tracking directly over toes; do not allow knees to flare out or cave in.',
        benefit: 'Unloads knee joints by teaching the hips and glutes to absorb ground impact.',
        animKey: 'bridge'
      }
    ],
    measuresToTake: [
      { measure: 'Warm Mahanarayan / Castor Oil Massage', detail: 'Gently rub warm oil clockwise around the knee cap for 4 minutes every morning.' },
      { measure: 'Cushioned Footwear & Avoid Barefoot Concrete', detail: 'Never walk on hard tile or concrete barefoot; wear shock-absorbing slippers.' },
      { measure: 'Moist Heat Compress Before Movement', detail: 'Apply warm moist towel for 10 minutes to loosen morning knee stiffness.' },
      { measure: 'Acupressure Point ST-36 (Zusanli)', detail: 'Four finger-widths below outer knee joint; massage with thumb for 90 seconds.' }
    ],
    clinicalRedFlags: [
      'Inability to bear any weight on the leg (knee buckles immediately)',
      'Joint is hot to the touch, visibly swollen, and accompanied by fever (rule out septic arthritis)',
      'Sudden loud pop during movement followed by rapid swelling within 2 hours (rule out acute ligament rupture)'
    ],
    healingRoadmap: {
      stage1: 'Days 1–2: Joint Unloading, Moist Heat & Non-Weight-Bearing Isometric Toning',
      stage2: 'Days 3–5: VMO Strengthening & Synovial Fluid Mobilization',
      stage3: 'Days 6–7+: Kinetic Hip-Knee-Ankle Kinetic Re-alignment'
    },
    recoveryMilestone: 'Morning knee stiffness reduced by 50% in 5 days; comfortable stair climbing restored in 2 to 3 weeks.'
  },

  migraine: {
    key: 'migraine',
    badge: 'Neurovascular & Cranial',
    title: 'Migraine Headaches, Sensory Sensitivity & Tension',
    icon: '⚡',
    rootCause: 'Trigeminal nerve hyperexcitation, neurogenic sterile inflammation of meningeal blood vessels, and fluctuating serotonin levels triggered by stress, weather, or dietary triggers.',
    ayurvedicDosha: 'Ardhavabhedaka (Vata-Pitta disorder involving cranial vessel constriction followed by painful rebound vasodilation).',
    whatToEatByDiet: {
      veg: [
        { food: 'Fresh Tender Coconut Water with Pinch of Pink Salt', why: 'Rapidly replenishes potassium and intracellular electrolytes to stabilize nerve membranes.' },
        { food: 'Fresh Ginger Root Infusion with Coriander Seeds', why: 'Ginger works as effectively as sumatriptan in clinical trials for acute headache relief.' },
        { food: 'Magnesium-Rich Spinach, Almonds & Pumpkin Seeds', why: 'Relaxes cerebral vascular tone and prevents cortical spreading depression.' },
        { food: 'Soaked Raisins (Munakka) in Morning', why: 'Cooling Pitta pacifier that stabilizes blood sugar.' }
      ],
      nonveg: [
        { food: 'Wild Salmon or Sardines (Steamed with Ginger)', why: 'High omega-3s inhibit neurogenic inflammation in cranial vessels.' },
        { food: 'Clear Shredded Chicken Ginger Broth', why: 'Light, hydrating, and provides magnesium co-factors.' },
        { food: 'Poached Egg on Whole Grain Toast', why: 'Supplies riboflavin (Vitamin B2), proven to reduce migraine frequency by 50%.' }
      ],
      vegan: [
        { food: 'Fresh Tender Coconut Water with Lemon', why: 'Isotonic hydration that restores cranial electrolyte balance.' },
        { food: 'Ginger & Coriander Seed Warm Decoction', why: 'Potent natural analgesic and anti-nausea remedy.' },
        { food: 'Pumpkin Seeds & Almond Butter', why: 'Dense magnesium and riboflavin.' }
      ],
      fasting: [
        { food: 'Warm Himalayan Salt Water with Fresh Ginger', why: 'Halts vascular spasm caused by dehydration and electrolyte shifts.' },
        { food: 'Tender Coconut Water', why: 'Permitted in fasting; immediately restores cranial potassium.' },
        { food: 'Cooling Mint & Coriander Infusion', why: 'Pacifies intense Pitta heat in the head.' }
      ]
    },
    whatToEat: [
      { food: 'Fresh Tender Coconut Water with Pink Salt', why: 'Replenishes electrolytes and stabilizes nerve membranes.' },
      { food: 'Ginger Root Infusion with Coriander Seeds', why: 'Naturally relieves vascular headache.' },
      { food: 'Magnesium-Rich Spinach & Almonds', why: 'Relaxes cerebral blood vessel tone.' }
    ],
    foodsToAvoid: [
      { food: 'Aged Cheeses, Nitrates & Cured Meats', why: 'Contains tyramine and vasoactive amines that trigger acute vascular spasms.' },
      { food: 'Artificial Sweeteners (Aspartame) & MSG', why: 'Excitotoxins that overstimulate cerebral NMDA receptors.' }
    ],
    exercises: [
      {
        id: 'pose_childs_migraine',
        name: 'Supported Child\'s Pose with Head Rest',
        sanskrit: 'Balasana Supported',
        duration: '5.0 min',
        target: 'Cranial Pressure Equalization',
        cue: 'Rest forehead on a soft pillow. Close eyes and take gentle, slow breaths through the nose.',
        benefit: 'Reduces intracranial pressure and calms visual-auditory sensory overload.',
        animKey: 'childs_pose'
      },
      {
        id: 'pose_nadi_migraine',
        name: 'Cooling Left-Nostril Breathing (Chandra Bhedana)',
        sanskrit: 'Chandra Bhedana Pranayama',
        duration: '4.0 min',
        target: 'Sympathetic Quieting',
        cue: 'Inhale through left nostril only, exhale smoothly through right nostril.',
        benefit: 'Directly stimulates the cooling, parasympathetic neural pathways.',
        animKey: 'pranayama'
      }
    ],
    measuresToTake: [
      { measure: 'Head Cold Pack + Foot Hot Soak Diverter', detail: 'Place an ice pack on back of neck while soaking feet in warm water; this draws blood away from the head.' },
      { measure: 'Dark, Silent Sensory Rest Chamber', detail: 'Lie down in a pitch-dark room with earplugs at the first hint of headache aura.' },
      { measure: 'Hydration Hydrometer Tracking', detail: 'Drink 500ml water immediately upon waking; dehydration is the #1 silent migraine trigger.' },
      { measure: 'Acupressure Point LI-4 (Hegu) & GB-20', detail: 'Pinch the webbing between thumb and index finger firmly for 90 seconds on both hands.' }
    ],
    clinicalRedFlags: [
      'Sudden "thunderclap" headache reaching maximum intensity within seconds (rule out subarachnoid hemorrhage - ER emergency)',
      'Headache accompanied by confusion, slurred speech, or weakness on one side of the face/body',
      'Headache with stiff neck, high fever, and altered mental status (rule out meningitis)'
    ],
    healingRoadmap: {
      stage1: 'Days 1–2: Sensory Dark-Room Quieting, Hydrotherapy Diverter & Left-Nostril Breath',
      stage2: 'Days 3–5: Cranial Vasomotor Stabilization & Magnesium Replenishment',
      stage3: 'Days 6–7+: Trigger Elimination & Cervical-Cranial Muscle Balance'
    },
    recoveryMilestone: 'Acute headache intensity drops within 30 minutes; migraine frequency cut by 70% within 3 weeks.'
  },

  sluggish_metabolism: {
    key: 'sluggish_metabolism',
    badge: 'Metabolic & Thyroid',
    title: 'Sluggish Metabolism, Stubborn Weight Plateau & Fatigue',
    icon: '🐢',
    rootCause: 'Down-regulated thyroid T3 conversion, leptin resistance, impaired mitochondrial oxidative phosphorylation, and subclinical chronic inflammation from sedentary routines.',
    ayurvedicDosha: 'Manda Agni & Medo Dhatu Vriddhi (Low digestive fire causing accumulated Ama and slow metabolic lipid turnover).',
    whatToEatByDiet: {
      veg: [
        { food: 'Morning Triphala & Warm Lemon Honey Water', why: 'Ayurvedic classic that cleanses gastrointestinal tract and activates hepatic metabolic enzymes.' },
        { food: 'Sprouted Moong & Horse Gram (Kulthi) Soup', why: 'Kulthi dal is the most potent lipid-metabolizing ancient legume in classical Ayurveda.' },
        { food: 'Fresh Ginger, Black Pepper & Long Pepper (Trikatu) Tea', why: 'Ignites metabolic fire (Deepana-Pachana) and accelerates thermogenesis.' },
        { food: 'Whole Millets (Jowar, Bajra, Ragi) Instead of Wheat', why: 'High insoluble fiber and resistant starch that optimizes gut GLP-1 hormone release.' }
      ],
      nonveg: [
        { food: 'Grilled Chicken Breast with Black Pepper & Turmeric', why: 'High thermic effect of food (TEF) burning 25% of calories just through protein digestion.' },
        { food: 'Steamed Wild Fish with Mustard Seeds & Cumin', why: 'Supplies iodine and selenium necessary for thyroid deiodinase T4 to T3 conversion.' },
        { food: 'Soft Boiled Organic Eggs with Microgreens', why: 'Dense in choline for optimal liver fat export.' },
        { food: 'Spiced Ginger-Garlic Clear Chicken Soup', why: 'Warms metabolism and burns digestive toxins.' }
      ],
      vegan: [
        { food: 'Horse Gram (Kulthi) & Sprouted Moong Stew', why: 'Exceptional plant protein and lipid-clearing properties.' },
        { food: 'Trikatu (Ginger, Black Pepper, Pippali) Warm Infusion', why: 'Stimulates thermogenesis and liver detoxification.' },
        { food: 'Whole Millet Rotis with Mustard Greens', why: 'High fiber, low glycemic index, and antioxidant rich.' },
        { food: 'Roasted Flax & Chia Seeds with Lime', why: 'Supports cellular metabolic efficiency.' }
      ],
      fasting: [
        { food: 'Warm Water with Fresh Ginger & Lemon Peel', why: 'Stimulates thermogenesis without breaking fasting autophagy.' },
        { food: 'Cinnamon & Tulsi Infusion', why: 'Regulates fasting blood sugar and speeds fat oxidation.' },
        { food: 'Electrolyte Pink Salt Warm Water', why: 'Maintains thyroid cellular energy during fasting.' }
      ]
    },
    whatToEat: [
      { food: 'Warm Lemon Water with Ginger & Honey', why: 'Ignites morning digestive fire.' },
      { food: 'Horse Gram (Kulthi) & Moong Soup', why: 'Potent lipid-metabolizing ancient pulse.' },
      { food: 'Trikatu Spiced Tea (Ginger, Black Pepper, Pippali)', why: 'Increases thermogenesis.' }
    ],
    foodsToAvoid: [
      { food: 'Chilled Water & Iced Drinks During Meals', why: 'Douses digestive fire (Agni) and coagulates dietary fats in the stomach.' },
      { food: 'Late Dinners (After 8:00 PM)', why: 'Circadian insulin resistance is highest at night; calories consumed late are preferentially stored as visceral fat.' }
    ],
    exercises: [
      {
        id: 'pose_surya_metabolic',
        name: 'Dynamic Sun Salutations (Surya Namaskar)',
        sanskrit: 'Surya Namaskar Flow',
        duration: '5.0 min',
        target: 'Full Body Cardiovascular & Metabolic Awakening',
        cue: 'Synchronize each movement with breath: inhale upward arch, exhale forward fold. Complete 6 steady rounds.',
        benefit: 'Engages over 80% of skeletal muscle mass, activating GLUT-4 glucose uptake and mitochondrial biogenesis.',
        animKey: 'cat_cow'
      },
      {
        id: 'pose_kapalabhati_metabolic',
        name: 'Skull Shining Breath (Kapalabhati)',
        sanskrit: 'Kapalabhati Kriya',
        duration: '4.0 min (Empty stomach only)',
        target: 'Visceral Agni & Diaphragmatic Pump',
        cue: 'Sharp active exhales by pulling navel to spine, passive inhales. 3 rounds of 30 strokes.',
        benefit: 'Massages liver, pancreas, and spleen while boosting cellular oxygen utilization.',
        animKey: 'pranayama'
      }
    ],
    measuresToTake: [
      { measure: '10-Minute Brisk Walk Immediately After Lunch & Dinner', detail: 'Blunts post-prandial glucose spike by 40% through direct contraction-mediated glucose uptake.' },
      { measure: 'Cold Water Splash on Face / Morning Cold Rinse', detail: 'Stimulates brown adipose tissue (BAT) thermogenesis and activates the vagus nerve.' },
      { measure: 'Strict 14:10 Circadian Eating Window', detail: 'Finish all meals within a 10-hour window (e.g. 9:00 AM to 7:00 PM) to allow 14 hours of night metabolic repair.' },
      { measure: 'Acupressure Point SP-6 & ST-36', detail: 'Massage for 60 seconds twice daily to boost digestive enzyme secretion.' }
    ],
    clinicalRedFlags: [
      'Rapid unexplained weight gain despite strict caloric deficit (evaluate for hypothyroidism or Cushing syndrome)',
      'Severe extreme cold intolerance, hair loss, and extreme lethargy (suspected severe thyroid deficit)',
      'Excessive unquenchable thirst and frequent urination (rule out type-2 diabetes)'
    ],
    healingRoadmap: {
      stage1: 'Days 1–2: Agni Kindle, 14:10 Intermittent Eating & Post-Meal Walks',
      stage2: 'Days 3–5: Mitochondrial Biogenesis & Insulin Sensitivity Optimization',
      stage3: 'Days 6–7+: Thermogenic Metabolic Resilience & Sustained Fat Oxidation'
    },
    recoveryMilestone: 'Energy slump vanishes in 3 days; metabolic rate rebounds and sustained fat loss begins within 10 to 14 days.'
  },

  fatty_liver: {
    key: 'fatty_liver',
    badge: 'Hepatic & Metabolic',
    title: 'Non-Alcoholic Fatty Liver (NAFLD) & Hepatic Congestion',
    icon: '🛡️',
    rootCause: 'Intrahepatic triglyceride accumulation exceeding 5% of liver weight, caused by high refined carbohydrate/fructose intake, de novo lipogenesis, and impaired VLDL lipid export.',
    ayurvedicDosha: 'Yakrit Roga / Pitta-Kapha Vriddhi (Sluggish liver filtration, bile stagnation, and accumulated Medas obstructing hepatic micro-channels).',
    whatToEatByDiet: {
      veg: [
        { food: 'Fresh Amla Juice or Bitter Gourd (Karela) Morning Shot', why: 'Amla provides massive natural vitamin C and bioflavonoids that down-regulate hepatic lipogenesis.' },
        { food: 'Papaya & Radish (Mooli) Salad with Lemon', why: 'Powerful natural sulfur and enzymes that stimulate phase-1 and phase-2 liver detox enzymes.' },
        { food: 'Bhumi Amla & Turmeric Herbal Infusion', why: 'Classical Ayurvedic hepatoprotective herb proven to lower elevated SGOT and SGPT enzymes.' }
      ],
      nonveg: [
        { food: 'Steamed Wild Salmon / Rohu with Mustard & Garlic', why: 'Omega-3 fatty acids directly reduce liver fat percentage and lower intrahepatic inflammation.' },
        { food: 'Light Poached Chicken Breast with Broccoli & Cumin', why: 'Sulfur compounds in broccoli boost glutathione synthesis to protect hepatocytes.' },
        { food: 'Green Tea & Amla Shot', why: 'High epigallocatechin gallate (EGCG) accelerates hepatic lipid clearance.' }
      ],
      vegan: [
        { food: 'Raw Pressed Ash Gourd (Petha) & Beetroot Juice', why: 'Flushes stagnant bile and provides betaine to support liver methylation.' },
        { food: 'Organic Tofu with Steamed Mustard Greens (Sarson)', why: 'Supplies choline without dietary cholesterol to promote fat export from liver cells.' },
        { food: 'Turmeric Ginger & Dandelion Root Tea', why: 'Stimulates bile acid synthesis and clears intrahepatic stagnation.' }
      ],
      fasting: [
        { food: 'Warm Water with Fresh Lemon & Amla Extract', why: 'Promotes liver autophagy and clearing of intrahepatic lipid droplets during fasting.' },
        { food: 'Black Coffee (No Sugar, No Dairy)', why: 'Clinical studies show 2 cups black coffee directly reduces liver fibrosis and NAFLD progression.' },
        { food: 'Coriander Seed & Cumin Infused Water', why: 'Cooling Pitta detoxifier permitted during fasting.' }
      ]
    },
    whatToEat: [
      { food: 'Fresh Amla Juice on Empty Stomach', why: 'Down-regulates liver fat synthesis and protects hepatocytes.' },
      { food: 'Steamed Cruciferous Greens (Broccoli, Methi)', why: 'Boosts natural glutathione production.' },
      { food: 'Turmeric & Black Pepper Herbal Tea', why: 'Lowers liver enzymes SGOT and SGPT.' }
    ],
    foodsToAvoid: [
      { food: 'High-Fructose Corn Syrup & Packaged Fruit Juices', why: 'Fructose is metabolized exclusively by the liver directly into triglycerides.' },
      { food: 'Deep-Fried Foods, Vanaspati & Trans Fats', why: 'Severely oxidizes hepatic cell membranes and triggers NASH inflammation.' }
    ],
    exercises: [
      {
        id: 'pose_ardha_matsyendrasana',
        name: 'Seated Spinal Twist (Ardha Matsyendrasana)',
        sanskrit: 'Ardha Matsyendrasana Hepatic Compress',
        duration: '3.5 min',
        target: 'Right Upper Quadrant Hepatic Compression',
        cue: 'Sit tall, cross right foot over left knee. Twist torso to the right, pressing left arm against right knee. Breathe into right ribs.',
        benefit: 'Gently compresses and releases the liver, flushing stagnant venous blood and stimulating fresh arterial perfusion.',
        animKey: 'cat_cow'
      },
      {
        id: 'pose_bhujangasana_liver',
        name: 'Gentle Cobra Pose (Bhujangasana)',
        sanskrit: 'Bhujangasana Abdominal Stretch',
        duration: '3.0 min',
        target: 'Anterior Visceral Decompression',
        cue: 'Lie on belly, hands under shoulders. Inhale and peel chest upward, keeping elbows slightly bent.',
        benefit: 'Tones the hepatic capsule and stretches anterior abdominal wall.',
        animKey: 'cobra'
      }
    ],
    measuresToTake: [
      { measure: 'Strict Elimination of Liquid Sugars & Sodas', detail: 'Zero colas, canned teas, or sweet syrups; replace with plain lemon water or green tea.' },
      { measure: '16:8 Intermittent Fasting Schedule', detail: 'Give the liver 16 hours of daily rest to burn stored intrahepatic glycogen and fat.' },
      { measure: 'Acupressure Point LV-3 (Taichong)', detail: 'Depression between big toe and second toe; massage firmly for 90 seconds on both feet.' },
      { measure: 'Castor Oil Pack over Right Rib Cage', detail: 'Apply warm castor oil over liver area with warm compress for 30 minutes 2 times weekly.' }
    ],
    clinicalRedFlags: [
      'Yellowing of skin or whites of the eyes (jaundice)',
      'Severe swelling in the abdomen (ascites) or lower legs (peripheral edema)',
      'Easy bruising or bleeding that does not stop promptly'
    ],
    healingRoadmap: {
      stage1: 'Days 1–2: Fructose Elimination, Hepatic Rest & Intermittent Autophagy',
      stage2: 'Days 3–5: Glutathione Synthesis Boost & Bile Flow Stimulation',
      stage3: 'Days 6–7+: Hepatic Lipid Mobilization & Liver Enzyme Normalization'
    },
    recoveryMilestone: 'Right upper quadrant heaviness lifts in 4 days; liver enzyme markers normalize within 4 to 8 weeks.'
  },

  ibs_bloating: {
    key: 'ibs_bloating',
    badge: 'Gastrointestinal & Microbiome',
    title: 'Irritable Bowel Syndrome (IBS), Gas & Visceral Spasms',
    icon: '🌪️',
    rootCause: 'Visceral hypersensitivity, dysregulated brain-gut axis, intestinal dysbiosis, and rapid carbohydrate fermentation causing painful luminal distention.',
    ayurvedicDosha: 'Grahani Roga (Weak digestive fire Agni leading to incomplete digestion, alternating loose and hard motions, and erratic Samana Vayu spasms).',
    whatToEatByDiet: {
      veg: [
        { food: 'Probiotic Buttermilk (Takra) with Roasted Cumin & Curry Leaves', why: 'The gold standard Ayurvedic remedy for IBS; restores gut flora and coats inflamed mucosa.' },
        { food: 'Stewed Bottle Gourd (Lauki) & Soft Yellow Moong Khichdi', why: 'Minimal fermentable oligosaccharides (Low-FODMAP) that digest smoothly without gas.' },
        { food: 'Warm Cumin, Mint & Fennel Seed Infusion', why: 'Smooth muscle antispasmodic that relaxes intestinal wall cramping.' }
      ],
      nonveg: [
        { food: 'Clear Shredded Chicken & Ginger Broth', why: 'Provides glutamine to rebuild damaged gut tight junctions without fermentable fibers.' },
        { food: 'Steamed White Fish with Cumin & Rock Salt', why: 'Ultra-gentle lean protein that does not trigger colonic spasms.' },
        { food: 'Probiotic Curd with Roasted Cumin', why: 'Replenishes healthy lactobacilli.' }
      ],
      vegan: [
        { food: 'Probiotic Coconut Water Kefir / Sol Kadhi', why: 'Dairy-free beneficial cultures that calm colonic fermentation.' },
        { food: 'Pureed Zucchini, Pumpkin & Yellow Lentil Soup', why: 'Gentle soluble fiber that regulates stool consistency.' },
        { food: 'Peppermint & Fennel Seed Decoction', why: 'Natural menthol blocks calcium channels in intestinal smooth muscle to stop cramping.' }
      ],
      fasting: [
        { food: 'Cumin-Coriander-Fennel (CCF) Warm Water', why: 'Permitted on fasting; relieves intestinal cramps within minutes.' },
        { food: 'Warm Water with Himalayan Pink Salt & Mint', why: 'Hydrates without triggering colonic spasms.' },
        { food: 'Fresh Tender Coconut Water (Small Sips)', why: 'Restores electrolytes depleted by loose stools.' }
      ]
    },
    whatToEat: [
      { food: 'Probiotic Buttermilk (Takra) with Cumin', why: 'Restores healthy intestinal flora and stops cramping.' },
      { food: 'Soft Moong Dal & Bottle Gourd Khichdi', why: 'Gentle low-FODMAP digestion.' },
      { food: 'Peppermint & Fennel Infusion', why: 'Relaxes visceral smooth muscle spasms.' }
    ],
    foodsToAvoid: [
      { food: 'Raw Cruciferous Veggies (Raw Broccoli, Cabbage, Onions)', why: 'High-FODMAP fructans and raffinose that trigger severe bacterial gas fermentation.' },
      { food: 'Artificial Sweeteners (Sorbitol, Mannitol) & Carbonated Sodas', why: 'Osmotic laxatives that cause intense bloating and diarrhea.' }
    ],
    exercises: [
      {
        id: 'pose_pavanamuktasana_gentle',
        name: 'Gentle Wind-Relieving Knee Hugs',
        sanskrit: 'Pavanamuktasana Series',
        duration: '4.0 min',
        target: 'Colonic Gas Decompression',
        cue: 'Hug both knees gently toward chest. Rock slowly from side to side like a gentle cradle. Exhale completely.',
        benefit: 'Mechanically assists the evacuation of trapped pocketed gas without abdominal strain.',
        animKey: 'childs_pose'
      },
      {
        id: 'pose_vajrasana_ibs',
        name: 'Thunderbolt Posture with Diaphragmatic Breath',
        sanskrit: 'Vajrasana Visceral Calming',
        duration: '4.0 min (After meals)',
        target: 'Enteric Nervous System Calming',
        cue: 'Sit on heels, shoulders relaxed. Place warm hands over navel and breathe 6 slow breaths per minute.',
        benefit: 'Down-regulates sympathetic visceral hypersensitivity and tones the vagus nerve.',
        animKey: 'pranayama'
      }
    ],
    measuresToTake: [
      { measure: 'Warm Water Bottle over Lower Abdomen', detail: 'Apply gentle warmth over belly for 15 minutes when spasms occur to relax intestinal smooth muscle.' },
      { measure: 'Eat in a Calm, Tech-Free Environment', detail: 'Never eat while stressed, arguing, or looking at stressful work screens; digestion requires parasympathetic state.' },
      { measure: 'Acupressure Point ST-25 (Tianshu)', detail: 'Two thumb-widths lateral to the navel on both sides; massage gently in clockwise circles for 60 seconds.' },
      { measure: 'Sip Water Slowly (Never Gulp)', detail: 'Gulping pulls excess air into the digestive tract, multiplying bloating.' }
    ],
    clinicalRedFlags: [
      'Unexplained significant weight loss or chronic persistent fever',
      'Blood in the stool or stools that appear pitch black and tarry',
      'Onset of new bowel symptoms for the first time after age 50'
    ],
    healingRoadmap: {
      stage1: 'Days 1–2: Low-FODMAP Elimination, Gut-Calming Takra & Visceral Heat',
      stage2: 'Days 3–5: Enteric Nervous System De-sensitization & Diaphragmatic Breathing',
      stage3: 'Days 6–7+: Gut Microbiome Re-inoculation & Digestive Resilience'
    },
    recoveryMilestone: 'Abdominal cramping and bloating drop by 60% in 3 days; regular pain-free bowel habits return in 2 weeks.'
  },

  constipation: {
    key: 'constipation',
    badge: 'Colonic & Motility',
    title: 'Chronic Constipation, Incomplete Evacuation & Sluggish Colon',
    icon: '🚽',
    rootCause: 'Slow colonic transit time, pelvic floor dyssynergia, inadequate dietary soluble fiber and water, and suppressing the natural urge to defecate (Vega Dharana).',
    ayurvedicDosha: 'Vibandha / Apana Vayu Dushti (Dry, hard, immobile Vata in the Pakwashaya/colon, absorbing excessive moisture from stools).',
    whatToEatByDiet: {
      veg: [
        { food: 'Warm Water with 1 tsp Pure Cow Ghee on Empty Stomach', why: 'Classical Ayurvedic remedy that lubricates colonic walls and stimulates gastrocolic reflex.' },
        { food: 'Overnight Soaked Munakka (Black Raisins) with Water', why: 'Natural sorbitol and soluble fiber that draws osmotic water into the stool.' },
        { food: 'Triphala Churna with Warm Water at Bedtime', why: 'Gently tones colonic peristalsis without causing habituation or dependence.' },
        { food: 'Boiled Spinach & Golden Moong Khichdi with Cumin', why: 'Soft dietary fiber and magnesium that stimulate natural peristalsis.' }
      ],
      nonveg: [
        { food: 'Warm Clear Bone Broth with Ghee and Spinach', why: 'Hydrates the intestinal mucosa and supplies gelatin to ease stool passage.' },
        { food: 'Steamed Fish with Leafy Greens & Olive Oil', why: 'Clean protein with healthy lubricating fats.' },
        { food: 'Overnight Soaked Munakka & Prunes in Morning', why: 'Natural gentle peristalsis stimulant.' }
      ],
      vegan: [
        { food: 'Soaked Chia Seeds & Flaxseeds in Warm Water', why: 'Creates a rich soluble mucilage gel that adds smooth bulk to the stool.' },
        { food: 'Fresh Papaya & Ripe Figs (Anjeer) in Morning', why: 'Natural digestive enzymes that soften hard stools.' },
        { food: 'Warm Castor Oil or Sesame Oil (1 tsp in warm water at night)', why: 'Time-tested botanical laxative that softens dry colonic contents.' }
      ],
      fasting: [
        { food: 'Warm Pink Salt Water (Laghu Shankhaprakshalana)', why: 'Sipping 500ml warm salt water in morning triggers immediate natural bowel clearance.' },
        { food: 'Triphala Warm Tea at Night (0 kcal)', why: 'Maintains healthy colonic cleansing during fasting days.' },
        { food: 'Fresh Tender Coconut Water', why: 'Supplies potassium and magnesium to stimulate peristaltic smooth muscle.' }
      ]
    },
    whatToEat: [
      { food: 'Warm Water with Ghee in Morning', why: 'Lubricates colon and activates gastrocolic reflex.' },
      { food: 'Soaked Munakka (Black Raisins)', why: 'Draws moisture into stool naturally.' },
      { food: 'Triphala with Warm Water at Bedtime', why: 'Tones colonic peristalsis.' }
    ],
    foodsToAvoid: [
      { food: 'Refined White Flour (Maida, Bakery Products)', why: 'Turns into gummy, sticky residue that arrests colonic motility.' },
      { food: 'Dry, Crunchy Cold Snacks (Chips, Biscuits) without Water', why: 'Dries out the colonic mucosa.' }
    ],
    exercises: [
      {
        id: 'pose_malasana_squat_motility',
        name: 'Squatting Posture (Malasana)',
        sanskrit: 'Malasana Evacuation Alignment',
        duration: '3.5 min (Every morning before toilet)',
        target: 'Puborectalis Muscle Relaxation',
        cue: 'Deep squat with feet flat. Place elbows inside knees and press out gently. Lengthen spine.',
        benefit: 'Straightens the anorectal angle from 90° to 180°, allowing effortless gravity-assisted evacuation.',
        animKey: 'squat'
      },
      {
        id: 'pose_cat_cow_pelvic',
        name: 'Cat-Cow with Pelvic Floor Tilts',
        sanskrit: 'Marjaryasana Pelvic Pump',
        duration: '3.0 min',
        target: 'Apana Vayu Downward Flow',
        cue: 'Undulate the spine rhythmically, focusing on relaxing pelvic floor on the inhale.',
        benefit: 'Re-coordinates the pelvic floor muscles needed for smooth stool passage.',
        animKey: 'cat_cow'
      }
    ],
    measuresToTake: [
      { measure: 'Use a Toilet Footstool (Squatty Potty Stance)', detail: 'Elevate feet 7 inches while sitting on a Western commode to mimic the natural squatting posture.' },
      { measure: 'Drink 500ml Warm Water First Thing in Morning', detail: 'Triggers the neurogenic gastrocolic reflex within 15–20 minutes.' },
      { measure: 'Never Suppress the Urge to Defecate', detail: 'Ignoring the urge reabsorbs water and blunts the rectal stretch receptors.' },
      { measure: 'Clockwise Abdominal Massage', detail: 'Massage belly with warm sesame oil in a clockwise circle (up right side, across top, down left side) for 3 minutes.' }
    ],
    clinicalRedFlags: [
      'Inability to pass gas or stool accompanied by severe vomiting and abdominal distension (bowel obstruction emergency)',
      'Rectal bleeding or severe sharp tearing pain with defecation (rule out anal fissure)',
      'Sudden persistent change in bowel habits lasting over 3 weeks in someone over 50'
    ],
    healingRoadmap: {
      stage1: 'Days 1–2: Morning Warm Hydration, Ghee Lubrication & Squat Alignment',
      stage2: 'Days 3–5: Triphala Peristaltic Tone & Soluble Fiber Mucilage Building',
      stage3: 'Days 6–7+: Regular Circadian Morning Evacuation Reflex Anchoring'
    },
    recoveryMilestone: 'Smooth, strain-free morning evacuation restored within 24 to 48 hours; chronic regularity anchored in 7 days.'
  },

  high_bp_stress: {
    key: 'high_bp_stress',
    badge: 'Cardiovascular & Autonomic',
    title: 'High Blood Pressure, Arterial Stiffness & Sympathetic Stress',
    icon: '🫀',
    rootCause: 'Chronic sympathetic nervous system overactivity, arterial endothelial dysfunction with reduced nitric oxide bioavailability, and elevated cortisol causing peripheral vasoconstriction.',
    ayurvedicDosha: 'Rakta-Pitta & Vyana Vayu Dushti (Excessive pressure and heat in the circulatory channels Rakta Vaha Srotas).',
    whatToEatByDiet: {
      veg: [
        { food: 'Fresh Beetroot & Pomegranate Juice with Lemon', why: 'Packed with dietary inorganic nitrates that convert directly into arterial-dilating nitric oxide.' },
        { food: 'Garlic Simmered in Milk or Water (Lahsuna)', why: 'Allicin compounds act as natural ACE-inhibitors to relax vascular smooth muscle.' },
        { food: 'Potassium-Rich Coconut Water, Bananas & Spinach', why: 'Displaces excess sodium from kidneys and lowers vascular resistance.' },
        { food: 'Soaked Flaxseeds & Pumpkin Seeds', why: 'High magnesium and alpha-linolenic acid (ALA) for endothelial elasticity.' }
      ],
      nonveg: [
        { food: 'Steamed Wild Salmon or Mackerel with Lemon & Garlic', why: 'EPA and DHA omega-3s dramatically lower systemic vascular resistance and triglycerides.' },
        { food: 'Clear Shredded Chicken Soup with Celery & Garlic', why: 'Celery contains 3-n-butylphthalide, a compound shown to lower stress hormones and dilate blood vessels.' },
        { food: 'Boiled Egg Whites with Spinach', why: 'High in potassium and peptide ACE inhibitors.' }
      ],
      vegan: [
        { food: 'Raw Pressed Beetroot, Celery & Cucumber Juice', why: 'Potent natural nitric oxide and phthalide vascular dilator.' },
        { food: 'Raw Walnuts & Soaked Chia Seeds', why: 'Essential plant fats that preserve endothelial health.' },
        { food: 'Hibiscus Flower (Gudhal) Herbal Infusion', why: 'Clinical studies show 2 cups daily lowers systolic BP by 7.2 mmHg, comparable to standard medications.' }
      ],
      fasting: [
        { food: 'Hibiscus & Cinnamon Warm Tea (0 kcal)', why: 'Natural vascular dilator without sugar or calories.' },
        { food: 'Fresh Tender Coconut Water', why: 'High potassium counteracts vascular constriction.' },
        { food: 'Warm Water with Crushed Garlic & Lemon', why: 'Directly lowers arterial tone during fasting.' }
      ]
    },
    whatToEat: [
      { food: 'Fresh Beetroot Juice with Lemon', why: 'Converts into arterial-dilating nitric oxide.' },
      { food: 'Garlic Infused Warm Water or Milk', why: 'Natural ACE-inhibitor relaxing vessels.' },
      { food: 'Potassium-Rich Coconut Water & Spinach', why: 'Displaces excess vascular sodium.' }
    ],
    foodsToAvoid: [
      { food: 'Excessive Processed Table Salt & Pickles (Achaar)', why: 'Causes immediate fluid retention and elevates peripheral vascular resistance.' },
      { food: 'Energy Drinks & Excessive Black Coffee', why: 'Triggers sudden acute spikes in systolic blood pressure.' }
    ],
    exercises: [
      {
        id: 'pose_shavasana_bp',
        name: 'Deep Systematic Corpse Pose (Shavasana)',
        sanskrit: 'Shavasana Autonomic Reset',
        duration: '7.0 min',
        target: 'Peripheral Vasodilatation',
        cue: 'Lie flat, arms and legs open. Release every muscle group sequentially from toes to crown. Breathe slowly.',
        benefit: 'Lowers sympathetic tone and reduces systolic blood pressure by 10–15 mmHg immediately.',
        animKey: 'childs_pose'
      },
      {
        id: 'pose_nadi_shodhana_bp',
        name: 'Alternate Nostril Breathing (Nadi Shodhana)',
        sanskrit: 'Nadi Shodhana Pranayama',
        duration: '5.0 min',
        target: 'Baroreceptor Sensitivity',
        cue: 'Smooth slow breath: 4s inhale left nostril, 4s exhale right nostril. Repeat without straining.',
        benefit: 'Balances the autonomic nervous system and boosts vagal parasympathetic braking.',
        animKey: 'pranayama'
      }
    ],
    measuresToTake: [
      { measure: 'Daily 20-Minute Nature Walk without Phone', detail: 'Significantly reduces circulating cortisol and peripheral arterial tone.' },
      { measure: 'Limit Sodium to <2000mg Daily', detail: 'Use mineral-rich Himalayan pink salt or rock salt in moderation; avoid all canned/processed foods.' },
      { measure: 'Warm Foot Soak Before Sleep', detail: 'Draws blood down into dilated peripheral vessels of the feet, taking pressure off the heart.' },
      { measure: 'Acupressure Point LV-3 & LI-11', detail: 'Press point between big toe and second toe for 90 seconds to clear arterial heat.' }
    ],
    clinicalRedFlags: [
      'Blood pressure reading exceeding 180/120 mmHg (Hypertensive Crisis - emergency hospital care)',
      'Severe crushing chest pain, pressure, or shortness of breath',
      'Sudden numbness or drooping on one side of face, arm weakness, or slurred speech (rule out stroke)'
    ],
    healingRoadmap: {
      stage1: 'Days 1–2: Nitric Oxide Activation, Sodium Restriction & Nadi Shodhana Breathing',
      stage2: 'Days 3–5: Autonomic Nervous System Rebalancing & Endothelial Elasticity',
      stage3: 'Days 6–7+: Sustained Blood Pressure Stabilization & Long-term Cardiac Protection'
    },
    recoveryMilestone: 'Immediate BP drop of 8–12 mmHg post-breathwork; steady resting BP normalization within 2 to 3 weeks.'
  },

  anxiety_stress: {
    key: 'anxiety_stress',
    badge: 'Neuro-Psychological & Adrenal',
    title: 'Generalized Anxiety, Panic Sensations & Nervous Burnout',
    icon: '🌊',
    rootCause: 'Chronic amygdala hyper-reactivity, low GABA neurotransmitter synthesis, vagal nerve exhaustion, and depleted adrenal reserves from persistent mental stressors.',
    ayurvedicDosha: 'Severe Prana Vata and Manovaha Srotas aggravation causing "Chitta Udvega" (unsettled mind, fearfulness, racing pulse, and breath shallowness).',
    whatToEatByDiet: {
      veg: [
        { food: 'Warm Cow Milk with Brahmi & Ashwagandha', why: 'Classical Ayurvedic Medhya Rasayana that crosses the blood-brain barrier to restore GABAergic calmness.' },
        { food: 'Warm Moong Khichdi with Generous Pure Ghee', why: 'Heavy, warm, unctuous food grounds erratic, floating Vata energy.' },
        { food: 'Soaked Almonds, Walnuts & Pumpkin Seeds', why: 'Dense magnesium and zinc required for serotonin and dopamine synthesis.' }
      ],
      nonveg: [
        { food: 'Rich Bone Marrow Stew with Turmeric & Nutmeg', why: 'High glycine directly calms excitatory NMDA receptors in the brain.' },
        { food: 'Wild Steamed Salmon with Asparagus', why: 'EPA/DHA omega-3s reduce neuro-inflammation linked with chronic panic and anxiety.' },
        { food: 'Soft Boiled Eggs with Sautéed Spinach', why: 'Supplies choline, tryptophan, and B-complex vitamins.' }
      ],
      vegan: [
        { food: 'Warm Almond Milk with Ashwagandha & Nutmeg', why: 'Potent dairy-free neuro-adaptogen that lowers serum cortisol.' },
        { food: 'Oatmeal Porridge with Chia Seeds & Blueberries', why: 'Slow complex carbohydrates that promote sustained brain serotonin release.' },
        { food: 'Chamomile & Shankhpushpi Herbal Infusion', why: 'Calms sympathetic nerve firing and prevents anxiety palpitations.' }
      ],
      fasting: [
        { food: 'Warm Water with Pinch of Himalayan Salt & Nutmeg', why: 'Hydrates neurons and stabilizes emotional volatility.' },
        { food: 'Fresh Tender Coconut Water', why: 'Replenishes electrolytes and cools mental agitation.' },
        { food: 'Tulsi & Cardamom Calming Tea (0 kcal)', why: 'Holy basil acts as a powerful botanical adaptogen to modulate adrenal stress.' }
      ]
    },
    whatToEat: [
      { food: 'Warm Milk with Ashwagandha & Nutmeg', why: 'Restores GABA and grounds nervous system.' },
      { food: 'Warm Moong Khichdi with Pure Ghee', why: 'Unctuous grounding food pacifies Vata.' },
      { food: 'Soaked Walnuts & Pumpkin Seeds', why: 'Supplies brain magnesium and omega-3s.' }
    ],
    foodsToAvoid: [
      { food: 'High Caffeine & Energy Drinks', why: 'Directly triggers adrenaline and cortisol release, mimicking panic attack symptoms.' },
      { food: 'Refined White Sugars & Fasting Too Long without Water', why: 'Hypoglycemic blood sugar crashes provoke acute anxiety and shakiness.' }
    ],
    exercises: [
      {
        id: 'pose_balasana_anxiety',
        name: 'Extended Child\'s Pose with Grounded Forehead',
        sanskrit: 'Balasana Grounding',
        duration: '5.0 min',
        target: 'Sensory Withdrawal & Amygdala Calming',
        cue: 'Forehead resting flat against the mat or soft pillow. Slow, long exhales that are twice as long as inhales.',
        benefit: 'Stimulates the oculocardiac reflex, instantly slowing a rapid racing heart.',
        animKey: 'childs_pose'
      },
      {
        id: 'pose_brahmari_anxiety',
        name: 'Humming Bee Breath (Brahmari)',
        sanskrit: 'Brahmari Pranayama Resonance',
        duration: '4.0 min',
        target: 'Vagal Nerve Activation',
        cue: 'Close eyes, gently close ear flaps with thumbs. Inhale deep, hum like a bee on exhale.',
        benefit: 'Vibration resonates through the skull bones, stimulating the vagus nerve and down-regulating anxiety.',
        animKey: 'pranayama'
      }
    ],
    measuresToTake: [
      { measure: 'Head & Scalp Sesame Oil Massage (Shiro Abhyanga)', detail: 'Gently massage warm sesame oil into the crown of the head for 4 minutes before sleeping.' },
      { measure: 'Physiological Sigh (Double Inhale, Long Exhale)', detail: 'Take two quick deep sniffs in through the nose, then one long slow sigh out through the mouth. Repeat 5 times.' },
      { measure: 'Barefoot Grounding on Grass (Earthing)', detail: 'Walk barefoot on moist grass or soil for 10 minutes to discharge static bodily stress.' },
      { measure: 'Acupressure Point Yintang & HT-7', detail: 'Gently press the "third eye" point between eyebrows with middle finger for 60 seconds.' }
    ],
    clinicalRedFlags: [
      'Panic sensations accompanied by crushing chest pressure, shortness of breath, or pain radiating to jaw (rule out heart attack)',
      'Severe depressive despair with thoughts of self-harm (seek immediate mental health support)',
      'Sudden severe disorientation or loss of contact with reality'
    ],
    healingRoadmap: {
      stage1: 'Days 1–2: Acute Amygdala Calming, Physiological Sighs & Head Warm Oil Rub',
      stage2: 'Days 3–5: Vagal Tone Rehabilitation & Adrenal Adaptogen Nourishment',
      stage3: 'Days 6–7+: Nervous System Resilience & Emotional Equilibrium'
    },
    recoveryMilestone: 'Acute panic sensations subside within 15 minutes; baseline nervous calm restored in 5 to 7 days.'
  },

  plantar_heel: {
    key: 'plantar_heel',
    badge: 'Podiatric & Fascial',
    title: 'Plantar Fasciitis, Morning Stabbing Heel Pain & Achilles Tightness',
    icon: '🏃',
    rootCause: 'Micro-tearing and chronic collagen degeneration at the calcaneal tuberosity origin of the plantar fascia, exacerbated by tight gastrocnemius/soleus calves and hard footwear.',
    ayurvedicDosha: 'Vata-Kapha accumulation in Pada (feet) and Snayu (tendons/ligaments), producing severe morning stiffness ("Vatakantaka").',
    whatToEatByDiet: {
      veg: [
        { food: 'Anti-inflammatory Turmeric Ginger Broth', why: 'Reduces local substance-P pain signaling at the calcaneal attachment.' },
        { food: 'Vitamin C Rich Amla & Citrus Fruits', why: 'Essential cofactor for prolyl hydroxylase to repair collagen fibers in the plantar fascia.' },
        { food: 'Soaked Walnuts & Chia Seeds', why: 'Enhances cellular membrane flexibility and tendon elasticity.' }
      ],
      nonveg: [
        { food: 'Slow-Simmered Bone Broth with Ginger', why: 'Dense type-I collagen peptides that directly accelerate fascial micro-tear repair.' },
        { food: 'Wild Salmon with Sautéed Bell Peppers', why: 'Omega-3s dampen chronic micro-inflammation in the plantar aponeurosis.' },
        { food: 'Eggs with Citrus Fruit in Morning', why: 'Provides amino acids + vitamin C for optimal collagen synthesis.' }
      ],
      vegan: [
        { food: 'Cold-Pressed Flaxseed Oil on Warm Grains', why: 'Plant-derived anti-inflammatory fatty acids.' },
        { food: 'Fresh Amla Juice with Black Pepper', why: 'High natural ascorbic acid for collagen cross-linking.' },
        { food: 'Soaked Black Sesame Seeds', why: 'Dense plant calcium and zinc for tendon resilience.' }
      ],
      fasting: [
        { food: 'Warm Himalayan Rock Salt Water with Lemon', why: 'Maintains tissue hydration and fascial elasticity.' },
        { food: 'Fresh Tender Coconut Water', why: 'Supplies potassium to prevent nocturnal foot cramping.' },
        { food: 'Turmeric Ginger Warm Decoction', why: 'Permitted on fasting; relieves acute heel pain.' }
      ]
    },
    whatToEat: [
      { food: 'Anti-inflammatory Turmeric Ginger Broth', why: 'Reduces substance-P pain signaling at calcaneus.' },
      { food: 'Vitamin C Rich Amla & Citrus', why: 'Essential cofactor for collagen repair.' },
      { food: 'Soaked Walnuts & Chia Seeds', why: 'Enhances tendon elasticity.' }
    ],
    foodsToAvoid: [
      { food: 'Excessive Inflammatory Refined Sugar', why: 'Triggers collagen stiffening through advanced glycation cross-linking.' }
    ],
    exercises: [
      {
        id: 'pose_frozen_bottle_roll',
        name: 'Frozen Water Bottle Arch Roll',
        sanskrit: 'Cryo-Fascial Mobilization',
        duration: '5.0 min (Morning & Night)',
        target: 'Plantar Fascia Decompression',
        cue: 'Roll the arch of your foot over a frozen cylindrical water bottle with moderate pressure.',
        benefit: 'Combines cold therapy to vasoconstrict inflammation with mechanical cross-friction massage.',
        animKey: 'bridge'
      },
      {
        id: 'pose_calf_stretch_heel',
        name: 'Downward Dog Pedal Calf Stretch',
        sanskrit: 'Adho Mukha Svanasana Heel Press',
        duration: '3.0 min',
        target: 'Gastroc-Soleus Complex Lengthening',
        cue: 'In downward dog, pedal heels alternately down toward the mat, holding each heel down for 5 seconds.',
        benefit: 'Releases the posterior superficial back line of fascia that anchors into the heel.',
        animKey: 'downward_dog'
      }
    ],
    measuresToTake: [
      { measure: 'Never Take First Morning Steps Barefoot', detail: 'Keep cushioned recovery slide sandals right next to your bed; never step on cold hard floors.' },
      { measure: 'Night Splint or Gentle Toe Dorsiflexion', detail: 'Keeps plantar fascia lengthened while sleeping so morning weight-bearing does not re-tear healing fibers.' },
      { measure: 'Towel Scrunch Toe Flexion', detail: 'Scrunch a hand towel on the floor using only your toes to strengthen the intrinsic arch muscles.' },
      { measure: 'Acupressure Point KD-1 (Yongquan)', detail: 'Depression on sole of foot behind ball; massage with thumb for 60 seconds.' }
    ],
    clinicalRedFlags: [
      'Inability to bear any weight on foot or visible deformity in arch',
      'Numbness or tingling sensation on sole of foot (rule out Tarsal Tunnel Syndrome)',
      'Severe pain accompanied by redness, swelling, and fever (rule out infection or osteomyelitis)'
    ],
    healingRoadmap: {
      stage1: 'Days 1–2: Cryo-Bottle Rolling, Never-Barefoot Rule & Calf Decompression',
      stage2: 'Days 3–5: Intrinsic Foot Muscle Strengthening & Plantar Gliding',
      stage3: 'Days 6–7+: Kinetic Gait Re-education & Arch Support Anchoring'
    },
    recoveryMilestone: 'First-step morning stabbing pain drops by 60% in 5 days; full structural healing in 3 to 4 weeks.'
  },

  frozen_shoulder: {
    key: 'frozen_shoulder',
    badge: 'Glenohumeral & Rotator Cuff',
    title: 'Frozen Shoulder (Adhesive Capsulitis) & Rotator Cuff Stiffness',
    icon: '🧗',
    rootCause: 'Fibroblastic proliferation and chronic inflammation of the glenohumeral joint capsule, causing severe capsular thickening, contracture, and mechanical restriction in external rotation and abduction.',
    ayurvedicDosha: 'Apabahuka (Vata lodged in the shoulder joint Snayu/ligaments, drying up Shleshaka Kapha lubricant and causing severe immobility).',
    whatToEatByDiet: {
      veg: [
        { food: 'Warm Cow Ghee with Turmeric & Black Pepper', why: 'Lubricates synovial joints and pacifies dry Vata contractures.' },
        { food: 'Ashwagandha & Ginger Restorative Night Milk', why: 'Relaxes deep shoulder muscle guarding and dampens pain.' },
        { food: 'Rich Moong Dal Moringa Drumstick Soup', why: 'Supplies bioavailable silica and calcium.' }
      ],
      nonveg: [
        { food: 'Simmered Bone Broth with Ginger & Black Pepper', why: 'Provides collagen peptides and chondroitin to restore capsular elasticity.' },
        { food: 'Steamed Wild Fish with Turmeric & Lemon', why: 'Marine omega-3s reduce capsular inflammatory cytokines.' },
        { food: 'Soft Poached Eggs with Sautéed Greens', why: 'Supplies sulfur amino acids for ligament remodeling.' }
      ],
      vegan: [
        { food: 'Cold-Pressed Black Sesame Oil on Warm Soups', why: 'Traditional Ayurvedic remedy for joint contractures.' },
        { food: 'Golden Almond Milk with Turmeric & Nutmeg', why: 'Plant-based anti-inflammatory for nocturnal pain relief.' },
        { food: 'Sprouted Lentils & Hemp Seeds', why: 'Rich in zinc and magnesium to prevent capsular fibrosis.' }
      ],
      fasting: [
        { food: 'Warm Water with Turmeric, Ginger & Pink Salt', why: 'Suppresses inflammatory prostaglandins without calories.' },
        { food: 'Fresh Tender Coconut Water', why: 'Natural electrolytes to prevent muscle guarding.' },
        { food: 'Cinnamon & Fennel Infusion', why: 'Carminative and anti-inflammatory.' }
      ]
    },
    whatToEat: [
      { food: 'Warm Ghee with Turmeric & Pepper', why: 'Lubricates shoulder joint capsule.' },
      { food: 'Ashwagandha Restorative Milk', why: 'Reduces night pain and muscle guarding.' },
      { food: 'Bone Broth or Moong Moringa Soup', why: 'Restores capsular elasticity.' }
    ],
    foodsToAvoid: [
      { food: 'Refrigerated Cold Drinks & Ice Creams', why: 'Provokes acute Vata constriction and worsens shoulder stiffness.' },
      { food: 'Deep-Fried Refined Foods', why: 'Increases systemic fibrotic cytokines.' }
    ],
    exercises: [
      {
        id: 'pose_codman_pendulum',
        name: 'Codman\'s Passive Pendulum Arm Swings',
        sanskrit: 'Dola Asana Shoulder Swing',
        duration: '4.0 min',
        target: 'Passive Capsular Mobilization',
        cue: 'Lean forward resting non-affected arm on a table. Let affected arm dangle limp like a pendulum. Use torso motion to create gentle 6-inch circles.',
        benefit: 'Gently separates joint surfaces and circulates synovial fluid with ZERO muscular contraction.',
        animKey: 'cat_cow'
      },
      {
        id: 'pose_finger_wall_walk',
        name: 'Finger Wall Climbing Abduction',
        sanskrit: 'Bhitthi Sanchalana',
        duration: '3.0 min',
        target: 'Progressive Overhead Range',
        cue: 'Face wall, crawl fingers slowly up wall like a spider until comfortable stretch is felt. Hold 5s, slide down.',
        benefit: 'Reclaims vertical elevation without compensatory shrugging of the upper trapezius.',
        animKey: 'wall_angels'
      }
    ],
    measuresToTake: [
      { measure: 'Warm Mahanarayan Sesame Oil Compress', detail: 'Massage warm oil into shoulder joint capsule for 5 minutes, followed by hot towel compress for 15 minutes.' },
      { measure: 'Sleep with Pillow Under Affected Arm', detail: 'Support affected arm on a pillow while sleeping to prevent the shoulder from rolling into painful internal rotation.' },
      { measure: 'Never Force Beyond Pain Barrier', detail: 'Forcing into sharp pain triggers protective muscle guarding that delays capsular remodeling.' },
      { measure: 'Acupressure Point LI-15 (Jianyu) & SI-9', detail: 'Depression at the outer edge of the shoulder joint; massage for 90 seconds.' }
    ],
    clinicalRedFlags: [
      'Shoulder pain following significant acute trauma or fall (rule out fracture or acute tendon tear)',
      'Severe pain accompanied by joint redness, warmth, and high fever (rule out septic arthritis)',
      'Sudden unexplained weakness in the entire arm or hand'
    ],
    healingRoadmap: {
      stage1: 'Days 1–2: Nocturnal Pain Control, Passive Pendulum Swings & Warm Oil Fomentation',
      stage2: 'Days 3–5: Progressive Finger Wall Walks & Scapulohumeral Mobilization',
      stage3: 'Days 6–7+: Rotator Cuff Strengthening & Functional Range Reclamation'
    },
    recoveryMilestone: 'Nocturnal shoulder pain subsides in 5 days; reach and overhead range expand steadily over 3 to 6 weeks.'
  },

  uric_acid_gout: {
    key: 'uric_acid_gout',
    badge: 'Metabolic & Rheumatologic',
    title: 'High Uric Acid, Hyperuricemia & Gout Joint Inflammation',
    icon: '🦶',
    rootCause: 'Impaired renal excretion or overproduction of uric acid, leading to needle-shaped monosodium urate crystal precipitation in peripheral joints (especially big toe MTP joint).',
    ayurvedicDosha: 'Vatarakta (Blood corrupted by Pitta and obstructed by Vata, creating burning pain, swelling, and redness in peripheral joints).',
    whatToEatByDiet: {
      veg: [
        { food: 'Fresh Tart Cherry Juice or Whole Cherries Daily', why: 'Clinical studies show tart cherries lower serum uric acid and reduce gout flare-ups by 50% through xanthine oxidase inhibition.' },
        { food: 'Fresh Pressed Cucumber, Mint & Lime Cooler', why: 'Strongly alkalizes urine pH, drastically increasing uric acid solubility and renal excretion.' },
        { food: 'Guduchi (Giloy) Stem Decoction', why: 'The premier Ayurvedic medicine for Vatarakta; normalizes elevated serum uric acid levels.' },
        { food: 'Plenty of Fresh Water with Fresh Lemon Slices (3.5L Daily)', why: 'Flushes urate crystals before they can precipitate in joint synovial fluid.' }
      ],
      nonveg: [
        { food: 'Poached Organic Egg Whites with Lemon', why: 'Zero-purine complete protein that does not generate uric acid.' },
        { food: 'Light Chicken Breast Stew with Celery & Cucumber', why: 'Low-purine poultry option (strictly avoid red meats, organ meats, sardines & shellfish).' },
        { food: 'Fresh Tart Cherry Infusion & Lemon Water', why: 'Potent uric acid excretion stimulants.' }
      ],
      vegan: [
        { food: 'Tart Cherry Juice with Crushed Ice', why: 'Proven natural xanthine oxidase inhibitor.' },
        { food: 'Alkaline Ash Gourd & Celery Juice in Morning', why: 'Alkalizes urinary pH to dissolve urate crystals.' },
        { food: 'Fresh Papaya, Apples & Pears', why: 'High in vitamin C which accelerates renal uric acid clearance.' },
        { food: 'Giloy (Guduchi) & Coriander Seed Infusion', why: 'Clears Vatarakta toxins from blood.' }
      ],
      fasting: [
        { food: 'Warm Water with Fresh Lemon Juice (3 Liters Daily)', why: 'Citric acid converts into alkaline bicarbonate in the body, dissolving urate crystals.' },
        { food: 'Cucumber & Mint Infused Water (0 kcal)', why: 'Alkaline hydration permitted on fasting.' },
        { food: 'Fresh Tender Coconut Water', why: 'Mild diuretic that flushes kidneys without purine load.' }
      ]
    },
    whatToEat: [
      { food: 'Fresh Tart Cherry Juice', why: 'Lowers uric acid by 50% via xanthine oxidase inhibition.' },
      { food: 'Cucumber, Mint & Lemon Water', why: 'Alkalizes urine and dissolves urate crystals.' },
      { food: 'Giloy (Guduchi) Herbal Decoction', why: 'Ayurvedic sovereign remedy for Vatarakta.' }
    ],
    foodsToAvoid: [
      { food: 'High-Purine Organ Meats (Liver, Kidney), Sardines, Anchovies & Red Meat', why: 'Purines break down directly into uric acid crystals.' },
      { food: 'Beer, Alcohol & High-Fructose Corn Syrup Beverages', why: 'Alcohol competes with uric acid for renal excretion, precipitating acute gout flares.' }
    ],
    exercises: [
      {
        id: 'pose_viparita_karani_gout',
        name: 'Elevated Legs-Up-The-Wall Drainage',
        sanskrit: 'Viparita Karani Peripheral Flush',
        duration: '6.0 min',
        target: 'Peripheral Lymphatic & Urate Clearance',
        cue: 'Elevate legs vertically up against wall. Gently circle ankles slowly 10 times in each direction.',
        benefit: 'Drains gravity-dependent inflammatory fluid pooling around feet and ankles.',
        animKey: 'childs_pose'
      },
      {
        id: 'pose_toe_spread_flex',
        name: 'Gentle Toe Spreads & Ankle Pumps',
        sanskrit: 'Pada Sanchalana Dynamic',
        duration: '3.0 min',
        target: 'Micro-Circulation to MTP Joint',
        cue: 'Sit comfortably. Spread toes wide like a fan, then relax. Avoid touching inflamed joint directly.',
        benefit: 'Stimulates local micro-circulation to carry away crystalline deposits.',
        animKey: 'bridge'
      }
    ],
    measuresToTake: [
      { measure: 'Massive Hydration Target (3.5 Liters Daily)', detail: 'Drink a glass of water every hour; high urinary flow rate is the most effective crystal dissolver.' },
      { measure: 'Ice Pack on Inflamed Toe Joint (20 Mins)', detail: 'Apply ice wrapped in a damp cloth to numb acute throbbing pain and vasoconstrict heat.' },
      { measure: 'Alkalize with Fresh Lemon Every Morning', detail: 'Juice of half lemon in warm water creates alkaline mineral ash in urine.' },
      { measure: 'Acupressure Point SP-3 (Taibai) & SP-1', detail: 'On the inner side of foot proximal to the big toe joint; gently press for 60 seconds.' }
    ],
    clinicalRedFlags: [
      'Joint is extremely hot, red, and swollen with high fever and chills (rule out septic arthritis emergency)',
      'Severe pain accompanied by inability to pass urine or sharp flank pain (rule out kidney stones)',
      'Sudden intense flare-up in multiple large joints simultaneously'
    ],
    healingRoadmap: {
      stage1: 'Days 1–2: Acute Cryotherapy, High Hydration & Tart Cherry Xanthine Inhibition',
      stage2: 'Days 3–5: Urinary Alkalization, Giloy Blood Cleansing & Urate Flushing',
      stage3: 'Days 6–7+: Purine-Free Dietary Habituation & Long-Term Renal Protection'
    },
    recoveryMilestone: 'Acute fiery toe pain drops significantly in 24–48 hours; serum uric acid normalizes in 3 to 4 weeks.'
  },

  eczema_skin_rash: {
    key: 'eczema_skin_rash',
    badge: 'Dermatological & Cutaneous',
    title: 'Eczema, Pruritus, Pitta Heat Rashes & Skin Barrier Impairment',
    icon: '🌿',
    rootCause: 'Defective stratum corneum filaggrin skin barrier, elevated TH2 cytokines and histamine release, and cutaneous micro-inflammation exacerbated by heat and food allergens.',
    ayurvedicDosha: 'Kushtha / Vicharchika (Aggravated Pitta-Kapha corrupting Rakta/blood and Lasika/lymph, erupting as intense itching, redness, and oozing).',
    whatToEatByDiet: {
      veg: [
        { food: 'Fresh Neem Leaf & Bitter Gourd (Karela) Juice Shot', why: 'Bitters are supreme blood purifiers (Raktashodhaka) that clear cutaneous Pitta heat.' },
        { food: 'Cooling Coconut Water & Aloe Vera Pulp', why: 'Supplies polysaccharides that heal mucosal and skin epithelial barriers.' },
        { food: 'Soaked Basil (Sabja) Seeds in Water with Rose Water', why: 'Directly cools internal Pitta burning sensation and reduces itching.' }
      ],
      nonveg: [
        { food: 'Wild Salmon or Sardines (Steamed with Fresh Dill & Lemon)', why: 'High marine omega-3s strengthen the epidermal lipid barrier and lower skin histamine.' },
        { food: 'Clear Shredded Chicken Stew with Zucchini & Cilantro', why: 'Provides collagen peptides and zinc needed for skin re-epithelialization.' },
        { food: 'Tender Coconut Water & Aloe Vera Juice', why: 'Alkalizes blood and reduces pruritus.' }
      ],
      vegan: [
        { food: 'Cold-Pressed Hemp Seed Oil on Raw Salads', why: 'Optimal 3:1 ratio of omega-6 to omega-3 plus GLA, clinically proven to reduce eczema severity.' },
        { food: 'Fresh Pressed Cucumber, Mint & Cilantro Juice', why: 'Heavy metal chelator and cooling Pitta blood cleanser.' },
        { food: 'Aloe Vera Juice & Soaked Chia Seeds', why: 'Repairs stratum corneum barrier from within.' }
      ],
      fasting: [
        { food: 'Fresh Tender Coconut Water', why: 'Supreme cooling electrolyte hydration permitted on fasts.' },
        { food: 'Coriander Seed & Fennel Infused Cold Water', why: 'Ayurvedic Himakashaya that purifies blood and quenches skin burning.' },
        { food: 'Neem-Infused Lukewarm Water', why: 'Potent antimicrobial and anti-inflammatory blood purifier.' }
      ]
    },
    whatToEat: [
      { food: 'Fresh Neem & Bitter Gourd Juice Shot', why: 'Supreme Ayurvedic blood purifier.' },
      { food: 'Cooling Coconut Water & Aloe Vera', why: 'Cools internal heat and hydrates skin barrier.' },
      { food: 'Soaked Basil (Sabja) Seeds in Water', why: 'Cools cutaneous Pitta and stops pruritus.' }
    ],
    foodsToAvoid: [
      { food: 'Fermented Foods, Aged Cheeses & Leftovers', why: 'Very high in histamine and Pitta heat that trigger uncontrollable skin itching.' },
      { food: 'Excessive Chilies, Vinegar & Deep-Fried Foods', why: 'Directly irritates blood vessels and flares cutaneous erythema.' }
    ],
    exercises: [
      {
        id: 'pose_sheetali_pranayama',
        name: 'Cooling Breath (Sheetali / Sheetkari)',
        sanskrit: 'Sheetali Pranayama',
        duration: '4.0 min',
        target: 'Systemic Heat Dissipation',
        cue: 'Roll tongue into tube (or clench teeth gently). Inhale slowly through mouth feeling icy air. Exhale through nose.',
        benefit: 'Directly lowers core blood temperature and calms cutaneous capillary dilation.',
        animKey: 'pranayama'
      },
      {
        id: 'pose_sarvangasana_supported',
        name: 'Supported Shoulderstand or Legs-Up-Wall',
        sanskrit: 'Viparita Karani Cutaneous Flush',
        duration: '5.0 min',
        target: 'Lymphatic Drainage & Skin Clearance',
        cue: 'Legs supported up wall with hips slightly elevated on blanket. Slow cooling breaths.',
        benefit: 'Facilitates venous and lymphatic drainage away from inflamed extremities.',
        animKey: 'childs_pose'
      }
    ],
    measuresToTake: [
      { measure: 'Virgin Coconut Oil or Ghee Topical Barrier', detail: 'Apply unrefined virgin coconut oil to damp skin immediately after bathing to lock in moisture.' },
      { measure: 'Lukewarm 5-Minute Showers (Never Hot)', detail: 'Hot water strips essential skin ceramides and causes severe rebound itch.' },
      { measure: '100% Breathable Organic Cotton Clothing', detail: 'Avoid synthetic polyester and rough wool that create friction and trap heat against the skin.' },
      { measure: 'Acupressure Point LI-11 (Quchi) & SP-10 (Xuehai)', detail: 'Outer elbow crease and inner thigh above knee; press for 90s to clear systemic blood heat.' }
    ],
    clinicalRedFlags: [
      'Sudden honey-colored crusting, oozing yellow pus, or severe worsening redness (rule out secondary impetigo/bacterial infection)',
      'Widespread painful blisters accompanied by high fever (rule out Eczema Herpeticum emergency)',
      'Severe swelling of face, lips, or tongue with hives and wheezing (anaphylaxis emergency)'
    ],
    healingRoadmap: {
      stage1: 'Days 1–2: Histamine Clearance, Sheetali Cooling Breath & Virgin Coconut Barrier',
      stage2: 'Days 3–5: Epidermal Stratum Corneum Re-hydration & Blood Pitta Pacification',
      stage3: 'Days 6–7+: Gut-Skin Axis Repair & Long-term Skin Resilience'
    },
    recoveryMilestone: 'Itching intensity drops by 50% within 48 hours; skin erythema and dry patches smooth out in 10 to 14 days.'
  },

  low_immunity: {
    key: 'low_immunity',
    badge: 'Immune & Lymphatic',
    title: 'Recurrent Colds, Sinus Congestion, Fatigue & Low Immunity',
    icon: '🛡️',
    rootCause: 'Depleted mucosal secretory IgA antibodies, sluggish lymphatic drainage, poor gut microbiome diversity, and chronic micro-inflammation.',
    ayurvedicDosha: 'Depleted Ojas (the subtle vital immune essence) and accumulated Kapha-Ama in Pranavaha Srotas (respiratory tract).',
    whatToEatByDiet: {
      veg: [
        { food: 'Ayush Kadha (Tulsi, Dalchini, Sunthi, Kali Mirch)', why: 'Contains high eugenol and piperine, enhancing macrophage phagocytosis and antiviral defense.' },
        { food: 'Raw Organic Honey with Crushed Black Pepper & Turmeric', why: 'Coats throat tissues with natural antimicrobial enzymes.' },
        { food: 'Hot Moringa Drumstick & Garlic Soup with Cumin', why: 'Packed with bioactive zinc, vitamin A, and allicin for white blood cell production.' }
      ],
      nonveg: [
        { food: 'Simmered Chicken Bone Broth with Garlic, Ginger & Peppercorns', why: 'Carnosine in chicken soup inhibits neutrophil chemotaxis, stopping cold symptoms.' },
        { food: 'Steamed Fish with Turmeric & Lemon', why: 'Omega-3s and zinc to boost T-lymphocyte response.' },
        { food: 'Soft Boiled Organic Eggs with Microgreens', why: 'Supplies high vitamin D3 and selenium essential for innate immunity.' }
      ],
      vegan: [
        { food: 'Hot Moringa, Garlic & Lemon Clear Broth', why: 'Potent botanical antimicrobial and zinc booster.' },
        { food: 'Ayush Herbal Kadha with Jaggery', why: 'Classical Ayurvedic immune tonic.' },
        { food: 'Sprouted Moong & Spinach Soup with Turmeric', why: 'Provides clean plant iron, folate, and antioxidants.' }
      ],
      fasting: [
        { food: 'Warm Water with Fresh Ginger, Tulsi & Black Pepper', why: 'Stimulates digestive and metabolic fire without calories.' },
        { food: 'Fresh Tender Coconut Water', why: 'Supplies lauric acid, a natural antimicrobial compound.' },
        { food: 'Lemon Salt Warm Water', why: 'Clears mucosal congestion during fast.' }
      ]
    },
    whatToEat: [
      { food: 'Traditional Ayush Kadha (Tulsi, Cinnamon, Ginger, Black Pepper)', why: 'Enhances macrophage phagocytosis and antiviral defense.' },
      { food: 'Honey with Black Pepper & Turmeric', why: 'Coats throat tissues with natural antimicrobial enzymes.' },
      { food: 'Hot Moringa Drumstick Soup with Garlic', why: 'Packed with zinc and allicin for white blood cells.' }
    ],
    foodsToAvoid: [
      { food: 'Refrigerated Ice Creams, Chilled Sodas & Cold Milk at Night', why: 'Creates immediate mucus congestion (Kapha) and lowers respiratory epithelial temperature.' },
      { food: 'Heavy Deep-Fried Cheese & Heavy Pastries', why: 'Stagnates lymphatic flow and taxes digestive energy.' }
    ],
    exercises: [
      {
        id: 'pose_kapala_immune',
        name: 'Kapalabhati Breath of Fire',
        sanskrit: 'Kapalabhati Pranayama',
        duration: '4.0 min',
        target: 'Sinus & Cranial Mucus Clearance',
        cue: '3 rounds of 30 forceful exhales with passive inhales. Keep spine straight and chest open.',
        benefit: 'Expels stagnant mucus from maxillary sinuses and oxygenates cranial tissue.',
        animKey: 'pranayama'
      },
      {
        id: 'pose_cobra_immune',
        name: 'Cobra Pose Chest & Thymus Expansion',
        sanskrit: 'Bhujangasana Thymus Awakening',
        duration: '3.0 min',
        target: 'Thymus Gland & Thoracic Duct Stimulation',
        cue: 'Inhale and arch chest upward proudly, rolling shoulders back and expanding ribs.',
        benefit: 'Stimulates T-cell maturation in the thymus and pumps thoracic lymphatic drainage.',
        animKey: 'cobra'
      }
    ],
    measuresToTake: [
      { measure: 'Steam Inhalation with Eucalyptus & Ajwain', detail: 'Inhale steam from hot water with 2 drops eucalyptus oil and crushed carom seeds for 8 minutes before bed.' },
      { measure: 'Warm Salt Water Gargle (Twice Daily)', detail: 'Gargle warm water with 1/2 tsp pink salt and 1/4 tsp turmeric to osmotic-rinse pharyngeal pathogens.' },
      { measure: 'Circadian 8-Hour Deep Sleep Window', detail: 'T-cell cytokine release peaks during non-REM stage 3 deep sleep; prioritize 10:30 PM bed time.' },
      { measure: 'Acupressure Point LI-11 (Quchi) & LU-7', detail: 'At the outer crease of the elbow; massage for 90 seconds to activate protective Wei Qi.' }
    ],
    clinicalRedFlags: [
      'High persistent fever (>102°F or 39°C) lasting more than 3 consecutive days',
      'Shortness of breath, wheezing, or chest pain when inhaling (rule out pneumonia)',
      'Severe stiff neck with high fever and confusion (rule out meningitis emergency)'
    ],
    healingRoadmap: {
      stage1: 'Days 1–2: Mucosal Clearing, Steam Inhalation & Ayush Kadha Phagocytosis Boost',
      stage2: 'Days 3–5: Thymus Gland Stimulation & Deep Sleep T-Cell Amplification',
      stage3: 'Days 6–7+: Ojas Rebuilding & Lymphatic Defense Resilience'
    },
    recoveryMilestone: 'Sinus congestion clears within 24 hours; immune resilience and energy rebound within 7 days.'
  }
};

// ==========================================================================
// MANDATORY WARM-UP & RESTORATIVE COOL-DOWN PROTOCOLS FOR ALL 20 CONDITIONS
// ==========================================================================
const WARMUP_COOLDOWN_MAP = {
  back_pain: {
    warmup: [
      {
        id: 'warmup_back_pelvic_tilts',
        name: 'Supine Pelvic Rocking & Sacral Tilts',
        sanskrit: 'Supta Kati Chalana',
        duration: '2.0 min',
        target: 'Lumbosacral Pre-Activation',
        cue: 'Lie on mat with knees bent. Inhale gently arch lower back; exhale press lower back flat into mat, engaging lower abs.',
        benefit: 'Pre-warms spinal disc hydration and resets pelvic tilt before loaded stretches.',
        whyRequired: 'Mandatory: Stretching cold paraspinal muscles can cause reactive disc herniation.',
        animKey: 'warmup_pelvic_tilts',
        isWarmup: true
      },
      {
        id: 'warmup_back_cat_cow',
        name: 'Gentle Cat-Cow Synovial Warm-Up',
        sanskrit: 'Marjaryasana-Bitilasana Prep',
        duration: '2.0 min',
        target: 'Spinal Synovial Fluid Circulation',
        cue: 'Move at 50% range of motion with slow, rhythmic diaphragmatic breathing.',
        benefit: 'Warms all 24 articulating vertebrae and calms reflexive paraspinal muscle splinting.',
        whyRequired: 'Mandatory: Increases tissue temperature and fascial elasticity before deeper remedial holds.',
        animKey: 'cat_cow',
        isWarmup: true
      }
    ],
    cooldown: {
      id: 'cooldown_back_child',
      name: 'Supported Restorative Child\'s Pose',
      sanskrit: 'Balasana Integration',
      duration: '2.5 min',
      target: 'Vagus Nerve Reset & Sacral Integration',
      cue: 'Rest forehead gently on mat. Breathe into your lower back with deep, unhurried 4-second inhales and 6-second exhales.',
      benefit: 'Shifts nervous system from sympathetic tone into anabolic tissue repair mode.',
      animKey: 'childs_pose',
      isCooldown: true
    }
  },

  sciatica_nerve: {
    warmup: [
      {
        id: 'warmup_sciatica_flossing',
        name: 'Sciatic Neural Glide & Nerve Flossing',
        sanskrit: 'Nadi Sanchalana Prep',
        duration: '2.0 min',
        target: 'Sciatic Nerve Mobilization',
        cue: 'Lie on back, support thigh with hands. Gently extend knee while pointing and flexing ankle in continuous smooth rhythm.',
        benefit: 'Gently glides nerve roots through the piriformis canal without triggering tension.',
        whyRequired: 'Mandatory: Never stretch an inflamed sciatic nerve cold; flossing releases fibrous adhesions first.',
        animKey: 'warmup_nerve_flossing',
        isWarmup: true
      },
      {
        id: 'warmup_sciatica_pelvic_tilts',
        name: 'Supine Pelvic Tilts & Sacral Decompression',
        sanskrit: 'Supta Kati Chalana',
        duration: '2.0 min',
        target: 'Sacroiliac Joint Relief',
        cue: 'Gently rock pelvis back and forth with soft rhythmic breathing to release lower lumbar guarding.',
        benefit: 'Relieves shear pressure across the L5-S1 junction and calms peripheral nerve hypersensitivity.',
        whyRequired: 'Mandatory: Prevents reactive piriformis muscle cramping during the subsequent stretch.',
        animKey: 'warmup_pelvic_tilts',
        isWarmup: true
      }
    ],
    cooldown: {
      id: 'cooldown_sciatica_child',
      name: 'Gentle Wide-Knee Resting Pose',
      sanskrit: 'Supta Balasana',
      duration: '2.5 min',
      target: 'Pelvic Floor Relaxation',
      cue: 'Let both knees fall comfortably outward, breathing calmly into the lower abdomen.',
      benefit: 'Discharges residual neurogenic tension and prevents post-exercise flare-up.',
      animKey: 'childs_pose',
      isCooldown: true
    }
  },

  neck_strain: {
    warmup: [
      {
        id: 'warmup_neck_chin_tucks',
        name: 'Cervical Retractions & Suboccipital Chin Tucks',
        sanskrit: 'Griva Sandhi Chalana',
        duration: '2.0 min',
        target: 'C1-C7 Spinal Alignment',
        cue: 'Sit tall. Glide chin gently straight backward like making a subtle double chin, keeping gaze level.',
        benefit: 'Decompresses C5-C7 nerve roots and releases upper trapezius spasm.',
        whyRequired: 'Mandatory: Stretching neck rotators while head is in forward-sheared posture damages cervical facet joints.',
        animKey: 'warmup_joint_mobility',
        isWarmup: true
      },
      {
        id: 'warmup_neck_shoulder_rolls',
        name: 'Gentle Scapular Shoulder Rolls & Glides',
        sanskrit: 'Skandha Sandhi Chalana',
        duration: '2.0 min',
        target: 'Scapulothoracic Mobility',
        cue: 'Roll shoulders up toward ears, back, and smoothly down in large fluid circles.',
        benefit: 'Pumps fresh oxygenated blood through levator scapulae and trapezius.',
        whyRequired: 'Mandatory: Releases postural hypertonicity before deeper lateral neck stretches.',
        animKey: 'wall_angels',
        isWarmup: true
      }
    ],
    cooldown: {
      id: 'cooldown_neck_rest',
      name: 'Seated Restorative Diaphragmatic Breath',
      sanskrit: 'Pranayama Vagus Calm',
      duration: '2.0 min',
      target: 'Cervicocranial Vagus Reset',
      cue: 'Rest palms on thighs, close eyes, and take 10 slow breaths dropping shoulders down.',
      benefit: 'Eliminates somatic neck defense tone and prevents tension headache rebound.',
      animKey: 'pranayama',
      isCooldown: true
    }
  },

  cervical_spondylosis: {
    warmup: [
      {
        id: 'warmup_cervical_isometrics',
        name: 'Gentle Isometric Cervical Stabilization',
        sanskrit: 'Griva Sthirata Prep',
        duration: '2.0 min',
        target: 'Deep Neck Flexor Activation',
        cue: 'Press palm into forehead with 20% light effort, resist with neck without head motion.',
        benefit: 'Stabilizes deep cervical flexors without shearing worn cervical discs.',
        whyRequired: 'Mandatory: Wakes up stabilizing deep muscles before any neck range-of-motion work.',
        animKey: 'warmup_joint_mobility',
        isWarmup: true
      },
      {
        id: 'warmup_cervical_wall_glides',
        name: 'Gentle Scapular Wall Angel Glides',
        sanskrit: 'Bhupa Wall Glides',
        duration: '2.5 min',
        target: 'Thoracic Extension',
        cue: 'Rest back against wall, glide arms up and down slowly within comfortable range.',
        benefit: 'Reverses forward head posture and unloads compressed neck vertebrae.',
        whyRequired: 'Mandatory: Mobilizes thoracic spine so the neck doesn\'t overcompensate.',
        animKey: 'wall_angels',
        isWarmup: true
      }
    ],
    cooldown: {
      id: 'cooldown_cervical_rest',
      name: 'Supine Head Rest with Vagus Reset',
      sanskrit: 'Savasana Cervical Alignment',
      duration: '2.5 min',
      target: 'Spinal Nerve Unwinding',
      cue: 'Lie flat with a small rolled towel under neck curve, letting jaw and eyes soften.',
      benefit: 'Preserves newly gained cervical disc height and promotes synovial fluid absorption.',
      animKey: 'childs_pose',
      isCooldown: true
    }
  },

  acid_reflux: {
    warmup: [
      {
        id: 'warmup_gerd_diaphragm',
        name: 'Diaphragmatic 360-Degree Agni Breath',
        sanskrit: 'Prana Deepening Breath',
        duration: '2.5 min',
        target: 'Lower Esophageal Sphincter Tone',
        cue: 'Sit upright. Place hands on lower ribs. Inhale expand ribs sideways, exhale gently draw navel inward.',
        benefit: 'Strengthens the crura of the diaphragm to seal the gastric opening against acid regurgitation.',
        whyRequired: 'Mandatory: Calms hyperactive sympathetic gastro-spasms before physical postures.',
        animKey: 'warmup_diaphragmatic_breath',
        isWarmup: true
      },
      {
        id: 'warmup_gerd_swirls',
        name: 'Seated Pelvic & Torso Sufi Swirls',
        sanskrit: 'Nabhi Chakra Chalana',
        duration: '2.0 min',
        target: 'Abdominal Peristalsis',
        cue: 'Make slow, graceful circles with your torso clockwise and counter-clockwise with gentle breath.',
        benefit: 'Encourages downward gastric emptying (Apana Vata) without compressive pressure.',
        whyRequired: 'Mandatory: Prevents gastric reflux surge during posture transitions.',
        animKey: 'cat_cow',
        isWarmup: true
      }
    ],
    cooldown: {
      id: 'cooldown_gerd_vajrasana',
      name: 'Seated Thunderbolt Digestion Rest',
      sanskrit: 'Vajrasana Digestive Pose',
      duration: '2.5 min',
      target: 'Pelvic Blood Flow Diversion',
      cue: 'Sit on heels with erect spine. Breathe slowly and let stomach settle comfortably.',
      benefit: 'Diverts blood flow directly to visceral organs, accelerating digestive transit.',
      animKey: 'pranayama',
      isCooldown: true
    }
  },

  pcos_hormone: {
    warmup: [
      {
        id: 'warmup_pcos_pelvic',
        name: 'Supine Pelvic Rocking & Sacral Awakening',
        sanskrit: 'Supta Kati Chalana',
        duration: '2.5 min',
        target: 'Pelvic Microcirculation',
        cue: 'Rock pelvis smoothly on mat to stimulate ovarian and uterine capillary blood flow.',
        benefit: 'Warms deep pelvic floor tissues and calms systemic cortisol spikes.',
        whyRequired: 'Mandatory: Relaxes tight pelvic floor ligaments before opening hip postures.',
        animKey: 'warmup_pelvic_tilts',
        isWarmup: true
      },
      {
        id: 'warmup_pcos_catcow',
        name: 'Gentle Cat-Cow with Extended Exhalations',
        sanskrit: 'Marjaryasana-Bitilasana Hormonal Prep',
        duration: '2.0 min',
        target: 'Endocrine Calming',
        cue: 'Move rhythmically, matching 4s inhale to 6s exhale to lower adrenal stress signals.',
        benefit: 'Reduces sympathetic tone and dampens adrenal androgen surges.',
        whyRequired: 'Mandatory: Lowers insulin resistance and muscle tension before strength holds.',
        animKey: 'cat_cow',
        isWarmup: true
      }
    ],
    cooldown: {
      id: 'cooldown_pcos_legs_wall',
      name: 'Supported Legs-Up-the-Wall',
      sanskrit: 'Viparita Karani Integration',
      duration: '3.0 min',
      target: 'Endocrine Gland Drainage',
      cue: 'Rest legs vertically up wall or on cushions, breathing calmly into lower pelvis.',
      benefit: 'Drains metabolic waste from reproductive organs and resets hypothalamic-pituitary axis.',
      animKey: 'inversion',
      isCooldown: true
    }
  },

  insomnia: {
    warmup: [
      {
        id: 'warmup_insomnia_nadi',
        name: 'Nadi Shodhana Alternate Nostril Breath Warm-Up',
        sanskrit: 'Nadi Shodhana Pranayama',
        duration: '3.0 min',
        target: 'Pineal & Autonomic Shift',
        cue: 'Sit comfortably. Close right nostril, inhale left 4s. Close left, exhale right 6s with eyes closed.',
        benefit: 'Down-regulates high beta brainwaves into calming alpha states.',
        whyRequired: 'Mandatory: Somatic preparation to transition the brain into natural melatonin secretion.',
        animKey: 'pranayama',
        isWarmup: true
      },
      {
        id: 'warmup_insomnia_kneetuck',
        name: 'Gentle Supine Knee Tucks & Sacral Rolls',
        sanskrit: 'Supta Pavanamukta Prep',
        duration: '2.0 min',
        target: 'Spinal De-escalation',
        cue: 'Hug knees gently toward chest, sway side to side slowly, exhaling tension into the mat.',
        benefit: 'Releases daytime spinal tension and calms restless leg syndrome.',
        whyRequired: 'Mandatory: Signals the autonomic nervous system that physical daytime exertion has ended.',
        animKey: 'childs_pose',
        isWarmup: true
      }
    ],
    cooldown: {
      id: 'cooldown_insomnia_savasana',
      name: 'Deep Savasana Yoga Nidra Integration',
      sanskrit: 'Savasana Restorative Sleep Prep',
      duration: '3.0 min',
      target: 'Delta Wave Transition',
      cue: 'Lie completely supported, scan body from toes to crown, releasing every muscle fiber.',
      benefit: 'Deep cellular relaxation that accelerates nocturnal slow-wave sleep onset.',
      animKey: 'childs_pose',
      isCooldown: true
    }
  },

  knee_joint: {
    warmup: [
      {
        id: 'warmup_knee_ankle_pumps',
        name: 'Non-Weight Bearing Ankle Pumps & Knee Synovial Wakes',
        sanskrit: 'Gulpha Sandhi Chalana',
        duration: '2.0 min',
        target: 'Knee Synovial Lubrication',
        cue: 'Sit on mat or chair. Smoothly point and flex ankles, gently extend knee without locking.',
        benefit: 'Circulates nutrient-rich synovial fluid across damaged cartilage without compressive force.',
        whyRequired: 'Mandatory: Cartilage has no blood supply; synovial fluid is only circulated through gentle pre-movement.',
        animKey: 'warmup_joint_mobility',
        isWarmup: true
      },
      {
        id: 'warmup_knee_heel_slides',
        name: 'Supine Gentle Heel Slides & Pelvic Balance',
        sanskrit: 'Janu Sandhi Chalana',
        duration: '2.5 min',
        target: 'Patellar Tracking Warm-Up',
        cue: 'Lie on back, slide one heel forward and back along the mat with controlled, smooth breath.',
        benefit: 'Activates the vastus medialis to track the patella cleanly in its femoral groove.',
        whyRequired: 'Mandatory: Prevents patellofemoral friction and meniscus pinching during loaded exercises.',
        animKey: 'warmup_pelvic_tilts',
        isWarmup: true
      }
    ],
    cooldown: {
      id: 'cooldown_knee_elevated',
      name: 'Elevated Leg Rest with Gentle Quad Relaxation',
      sanskrit: 'Viparita Janu Rest',
      duration: '2.5 min',
      target: 'Joint Decompression & Lymph Flush',
      cue: 'Elevate lower legs on bolster or chair, letting knee ligaments completely soften.',
      benefit: 'Flushes inflammatory fluid out of the joint capsule and relieves aching.',
      animKey: 'inversion',
      isCooldown: true
    }
  },

  migraine: {
    warmup: [
      {
        id: 'warmup_migraine_chin_tuck',
        name: 'Suboccipital Release & Gentle Chin Tucks',
        sanskrit: 'Shirsha Sandhi Chalana',
        duration: '2.0 min',
        target: 'Greater Occipital Nerve Decompression',
        cue: 'Keep gaze level. Gently glide chin backward without tilting head down, softening throat.',
        benefit: 'Relieves vascular throttling of the vertebral arteries at the skull base.',
        whyRequired: 'Mandatory: Prevents rebound vasodilation and throbbing during remedial exercise.',
        animKey: 'warmup_joint_mobility',
        isWarmup: true
      },
      {
        id: 'warmup_migraine_sheetali',
        name: 'Slow Shoulder Melts with Cooling Sheetali Breath',
        sanskrit: 'Sheetali Pranayama Prep',
        duration: '2.5 min',
        target: 'Trigeminal Sensory Calming',
        cue: 'Drop shoulders away from ears, inhale cooling air through curled tongue, exhale warm tension through nose.',
        benefit: 'Quiets trigeminovascular sensitization and ocular throbbing.',
        whyRequired: 'Mandatory: Calms sympathetic overdrive that triggers migraine aura.',
        animKey: 'pranayama',
        isWarmup: true
      }
    ],
    cooldown: {
      id: 'cooldown_migraine_child',
      name: 'Darkened Room Restorative Child\'s Pose',
      sanskrit: 'Balasana Sensory Decompression',
      duration: '3.0 min',
      target: 'Sensory Shielding & Neural Quiet',
      cue: 'Rest forehead on folded towel, close eyes, breathe with slow 4s inhale and 6s exhale.',
      benefit: 'Down-regulates sensory processing in the thalamus to abort migraine pain loops.',
      animKey: 'childs_pose',
      isCooldown: true
    }
  },

  sluggish_metabolism: {
    warmup: [
      {
        id: 'warmup_metabolism_catcow',
        name: 'Dynamic Cat-Cow with Agni Breath',
        sanskrit: 'Agni Sara Marjaryasana',
        duration: '2.5 min',
        target: 'Thyroid & Visceral Awakening',
        cue: 'Exaggerate thoracic expansion on inhale, firm abdominal squeeze on exhale to massage visceral organs.',
        benefit: 'Stimulates thyroid and parathyroid glands through cervical articulation.',
        whyRequired: 'Mandatory: Ignites sluggish cellular mitochondrial enzymes before strength loading.',
        animKey: 'cat_cow',
        isWarmup: true
      },
      {
        id: 'warmup_metabolism_mobility',
        name: 'Gentle Standing Joint Mobility & Arm Circles',
        sanskrit: 'Sarva Sandhi Chalana',
        duration: '2.0 min',
        target: 'Full Body Lymphatic Awakening',
        cue: 'Rotate wrists, shoulders, and hips smoothly in large synchronized circles with deep breath.',
        benefit: 'Accelerates stagnant lymphatic drainage and clears cellular waste.',
        whyRequired: 'Mandatory: Pre-warms dormant muscular fibers and prevents sudden cramping.',
        animKey: 'warmup_joint_mobility',
        isWarmup: true
      }
    ],
    cooldown: {
      id: 'cooldown_metabolism_rest',
      name: 'Seated Spinal Rest & Calming Breath',
      sanskrit: 'Sukhasana Metabolic Integration',
      duration: '2.0 min',
      target: 'Homeostatic Balancing',
      cue: 'Sit tall, palms resting face up on knees, observe warmth circulating through body.',
      benefit: 'Balances cortisol and preserves metabolic elevation without post-exercise exhaustion.',
      animKey: 'pranayama',
      isCooldown: true
    }
  },

  fatty_liver: {
    warmup: [
      {
        id: 'warmup_liver_rib_breath',
        name: 'Diaphragmatic Breath & Lateral Right Rib Wave',
        sanskrit: 'Yakrit Prana Sanchalana',
        duration: '2.5 min',
        target: 'Hepatic Microcirculation',
        cue: 'Sit tall. Inhale expand right ribcage where the liver resides, exhale gently contract.',
        benefit: 'Mechanically compresses and decompresses the liver to stimulate bile drainage.',
        whyRequired: 'Mandatory: Mobilizes visceral venous pooling before remedial spinal twists.',
        animKey: 'warmup_diaphragmatic_breath',
        isWarmup: true
      },
      {
        id: 'warmup_liver_torso_rotations',
        name: 'Gentle Seated Torso Rotations',
        sanskrit: 'Nabhi Chakra Chalana',
        duration: '2.0 min',
        target: 'Visceral Detoxification Flow',
        cue: 'Make slow, clockwise circles with your ribcage, breathing smoothly and deeply.',
        benefit: 'Encourages hepatic portal vein blood flow and breaks intra-abdominal stagnation.',
        whyRequired: 'Mandatory: Prevents visceral cramping during deeper twists.',
        animKey: 'cat_cow',
        isWarmup: true
      }
    ],
    cooldown: {
      id: 'cooldown_liver_child',
      name: 'Supported Child\'s Pose with Gentle Lateral Bow',
      sanskrit: 'Balasana Hepatic Rest',
      duration: '2.5 min',
      target: 'Visceral Organ Decompression',
      cue: 'Rest in child\'s pose, walking hands slightly to the left to gently open right hepatic flank.',
      benefit: 'Maximizes bile duct relaxation and parasympathetic metabolic processing.',
      animKey: 'childs_pose',
      isCooldown: true
    }
  },

  ibs_bloating: {
    warmup: [
      {
        id: 'warmup_ibs_balloon',
        name: 'Agni Deep Diaphragmatic Breath & Belly Balloon',
        sanskrit: 'Udara Sanchalana Breath',
        duration: '2.5 min',
        target: 'Enteric Nervous System Reset',
        cue: 'Place hands over navel. Inhale expand belly like a soft balloon, exhale release slowly.',
        benefit: 'Stimulates the vagus nerve and down-regulates hyperactive gut sensations.',
        whyRequired: 'Mandatory: Relaxes spastic intestinal smooth muscle before posture practice.',
        animKey: 'warmup_diaphragmatic_breath',
        isWarmup: true
      },
      {
        id: 'warmup_ibs_pelvic',
        name: 'Gentle Supine Pelvic Rocking & Sacral Circles',
        sanskrit: 'Supta Kati Chalana',
        duration: '2.0 min',
        target: 'Colonic Peristalsis Priming',
        cue: 'Rock pelvis smoothly to ease gas bubbles through the splenic flexure without strain.',
        benefit: 'Relieves sharp gas cramp spikes before remedial postures.',
        whyRequired: 'Mandatory: Mobilizes trapped gas pockets safely without straining colonic loops.',
        animKey: 'warmup_pelvic_tilts',
        isWarmup: true
      }
    ],
    cooldown: {
      id: 'cooldown_ibs_child',
      name: 'Supported Wide-Knee Child\'s Pose',
      sanskrit: 'Prasarita Balasana Gut Rest',
      duration: '2.5 min',
      target: 'Intestinal Spasm Release',
      cue: 'Open knees wide, let belly rest softly between thighs, breathe into low back.',
      benefit: 'Relieves all intra-abdominal pressure and allows smooth gas dissipation.',
      animKey: 'childs_pose',
      isCooldown: true
    }
  },

  constipation: {
    warmup: [
      {
        id: 'warmup_constipation_swirls',
        name: 'Warm Water Hydration & Clockwise Torso Swirls',
        sanskrit: 'Gastrocolic Stimulation Circles',
        duration: '2.5 min',
        target: 'Gastrocolic Reflex Triggering',
        cue: 'Rotate upper body in rhythmic clockwise circles (following direction of ascending to descending colon).',
        benefit: 'Mechanically stimulates peristaltic waves along the colon wall.',
        whyRequired: 'Mandatory: Awaken gastrocolic transit before deep squatting exercises.',
        animKey: 'cat_cow',
        isWarmup: true
      },
      {
        id: 'warmup_constipation_kneetucks',
        name: 'Supine Alternating Single Knee Tucks',
        sanskrit: 'Eka Pada Pavanamuktasana Prep',
        duration: '2.0 min',
        target: 'Apana Vata Direction',
        cue: 'Gently draw right knee to chest, hold for 3 breaths, switch smoothly to left knee.',
        benefit: 'Directs descending biological energy (Apana Vata) downward toward the rectum.',
        whyRequired: 'Mandatory: Releases rectal spasms and softens abdominal guarding.',
        animKey: 'childs_pose',
        isWarmup: true
      }
    ],
    cooldown: {
      id: 'cooldown_constipation_malasana_rest',
      name: 'Supported Pelvic Rest Pose',
      sanskrit: 'Supta Baddha Konasana',
      duration: '2.0 min',
      target: 'Pelvic Floor Relaxation',
      cue: 'Lie on back with soles of feet together, knees open, breathing calmly into lower pelvis.',
      benefit: 'Completely unclamps the puborectalis muscle to enable natural elimination.',
      animKey: 'childs_pose',
      isCooldown: true
    }
  },

  high_bp_stress: {
    warmup: [
      {
        id: 'warmup_bp_chandra',
        name: 'Chandra Bhedana (Left Nostril Cooling Breath)',
        sanskrit: 'Chandra Bhedana Pranayama',
        duration: '3.0 min',
        target: 'Baroreceptor Reflex Calibration',
        cue: 'Block right nostril. Inhale slowly through left nostril for 4s, exhale right for 6s.',
        benefit: 'Stimulates parasympathetic vagal braking, lowering vascular peripheral resistance.',
        whyRequired: 'Mandatory: Never perform physical postures with elevated systolic spike.',
        animKey: 'pranayama',
        isWarmup: true
      },
      {
        id: 'warmup_bp_neck_melts',
        name: 'Gentle Neck Half-Circles & Shoulder Melts',
        sanskrit: 'Griva Sandhi Chalana',
        duration: '2.0 min',
        target: 'Carotid Sinus Decompression',
        cue: 'Gently roll ear toward shoulder, breathing out tension. Never drop head back.',
        benefit: 'Relieves muscular compression on the carotid sinus baroreceptors.',
        whyRequired: 'Mandatory: Pre-dilates microvasculature to ensure smooth cardiac output.',
        animKey: 'warmup_joint_mobility',
        isWarmup: true
      }
    ],
    cooldown: {
      id: 'cooldown_bp_inversion',
      name: 'Supported Legs Up the Wall (Viparita Karani)',
      sanskrit: 'Viparita Karani Cardiac Rest',
      duration: '3.0 min',
      target: 'Venous Return & Blood Pressure Drop',
      cue: 'Rest legs up wall, arms open at sides, breathe calmly and evenly.',
      benefit: 'Reduces cardiac workload and induces profound arterial vasodilation.',
      animKey: 'inversion',
      isCooldown: true
    }
  },

  anxiety_stress: {
    warmup: [
      {
        id: 'warmup_anxiety_sigh',
        name: 'Physiological Sigh & 5-Count Diaphragmatic Breath',
        sanskrit: 'Dirgha Shwasa Vagus Priming',
        duration: '3.0 min',
        target: 'Amygdala Down-Regulation',
        cue: 'Two quick inhales through nose, followed by one long, slow sigh out through mouth.',
        benefit: 'Immediately resets neural panic tone and dumps excess alveolar carbon dioxide.',
        whyRequired: 'Mandatory: Somatic uncoupling of physical fight-or-flight before movement.',
        animKey: 'warmup_diaphragmatic_breath',
        isWarmup: true
      },
      {
        id: 'warmup_anxiety_catcow',
        name: 'Gentle Cat-Cow with Audible Sigh Exhale',
        sanskrit: 'Marjaryasana-Bitilasana Sigh',
        duration: '2.0 min',
        target: 'Vagal Nerve Awakening',
        cue: 'Arch and round spine slowly, exhaling with a gentle audible hum.',
        benefit: 'Vocal cord vibration stimulates auricular branches of the vagus nerve.',
        whyRequired: 'Mandatory: Melts somatic defensive muscular armoring in chest and throat.',
        animKey: 'cat_cow',
        isWarmup: true
      }
    ],
    cooldown: {
      id: 'cooldown_anxiety_child',
      name: 'Supported Restorative Child\'s Pose with Weighted Hands',
      sanskrit: 'Salamba Balasana Neuro-Calm',
      duration: '3.0 min',
      target: 'Nervous System Grounding',
      cue: 'Rest head on mat, feel contact points with floor, breathe smoothly into back body.',
      benefit: 'Provides proprioceptive grounding and eliminates floating panic sensations.',
      animKey: 'childs_pose',
      isCooldown: true
    }
  },

  plantar_heel: {
    warmup: [
      {
        id: 'warmup_plantar_abcs',
        name: 'Non-Weight Bearing Ankle ABCs & Joint Circles',
        sanskrit: 'Pada Sandhi Chalana',
        duration: '2.0 min',
        target: 'Plantar Fascia Synovial Waking',
        cue: 'Sit with leg elevated. Trace circles and point/flex ankle smoothly in the air.',
        benefit: 'Pumps blood into the hypovascular calcaneal insertion of the plantar fascia.',
        whyRequired: 'Mandatory: Walking or stretching on a cold, contracted plantar fascia causes micro-tears.',
        animKey: 'warmup_joint_mobility',
        isWarmup: true
      },
      {
        id: 'warmup_plantar_towel',
        name: 'Gentle Calf & Achilles Towel Mobilization',
        sanskrit: 'Gulpha Prana Sanchalana',
        duration: '2.0 min',
        target: 'Gastrocnemius-Soleus Complex',
        cue: 'Place soft strap or towel under ball of foot, gently pull without straining.',
        benefit: 'Relieves morning contracture of the Achilles tendon.',
        whyRequired: 'Mandatory: Unloads tensile pull on the heel bone before standing.',
        animKey: 'warmup_pelvic_tilts',
        isWarmup: true
      }
    ],
    cooldown: {
      id: 'cooldown_plantar_elevation',
      name: 'Elevated Foot Rest with Gentle Toe Spreads',
      sanskrit: 'Pada Vishrama Inversion',
      duration: '2.0 min',
      target: 'Calcaneal Decompression',
      cue: 'Rest feet elevated on cushions, gently spread toes wide and relax.',
      benefit: 'Drains localized inflammatory edema from the heel fat pad.',
      animKey: 'inversion',
      isCooldown: true
    }
  },

  frozen_shoulder: {
    warmup: [
      {
        id: 'warmup_shoulder_pendulum',
        name: 'Codman\'s Pendulum Arm Swings',
        sanskrit: 'Bhuja Sandhi Chalana',
        duration: '2.5 min',
        target: 'Glenohumeral Capsule Decompression',
        cue: 'Lean forward resting good arm on table. Let affected arm dangle freely in gentle gravity circles.',
        benefit: 'Separates humeral head from inflamed glenoid cavity without muscular activation.',
        whyRequired: 'Mandatory: Active contraction while capsule is contracted causes severe sharp spasms.',
        animKey: 'warmup_joint_mobility',
        isWarmup: true
      },
      {
        id: 'warmup_shoulder_scapular',
        name: 'Scapular Retractions & Ribcage Breathing',
        sanskrit: 'Skandha Sanchalana',
        duration: '2.0 min',
        target: 'Scapulothoracic Gliding',
        cue: 'Squeeze shoulder blades gently together for 3 seconds, release with a deep breath.',
        benefit: 'Restores the 2:1 scapulohumeral rhythm required for safe arm lifting.',
        whyRequired: 'Mandatory: Prevents impingement of the supraspinatus tendon.',
        animKey: 'wall_angels',
        isWarmup: true
      }
    ],
    cooldown: {
      id: 'cooldown_shoulder_child',
      name: 'Supported Child\'s Pose with Forearm Bolster',
      sanskrit: 'Salamba Balasana Bhuja Rest',
      duration: '2.5 min',
      target: 'Rotator Cuff Softening',
      cue: 'Rest forearms on a pillow in child\'s pose, letting shoulders broaden without tension.',
      benefit: 'Maintains joint space and prevents post-exercise synovial inflammation.',
      animKey: 'childs_pose',
      isCooldown: true
    }
  },

  uric_acid_gout: {
    warmup: [
      {
        id: 'warmup_gout_joint_pumps',
        name: 'Non-Weight Bearing Gentle Joint Fluid Pumps',
        sanskrit: 'Asthi Sandhi Shodhana',
        duration: '2.5 min',
        target: 'Synovial Crystal Flushing',
        cue: 'Lie comfortably, gently wiggle toes, rotate ankles and knees without friction.',
        benefit: 'Circulates warm synovial fluid around sharp monosodium urate micro-crystals.',
        whyRequired: 'Mandatory: Prevents crystallization friction from tearing delicate joint synovium.',
        animKey: 'warmup_joint_mobility',
        isWarmup: true
      },
      {
        id: 'warmup_gout_spine_breath',
        name: 'Diaphragmatic Breath & Gentle Spine Waves',
        sanskrit: 'Vrikka Prana Sanchalana',
        duration: '2.0 min',
        target: 'Renal Blood Flow Optimization',
        cue: 'Synchronize gentle spine waves with deep abdominal breathing.',
        benefit: 'Improves renal perfusion to accelerate uric acid filtration in urine.',
        whyRequired: 'Mandatory: Boosts systemic clearance without elevating joint pressure.',
        animKey: 'cat_cow',
        isWarmup: true
      }
    ],
    cooldown: {
      id: 'cooldown_gout_elevation',
      name: 'Elevated Joint Restorative Pose',
      sanskrit: 'Sandhi Vishrama Inversion',
      duration: '2.5 min',
      target: 'Urate Crystal Dispersion',
      cue: 'Elevate affected limb on pillows, breathe calmly and hydrate with sendha namak water.',
      benefit: 'Reduces intra-articular pressure and promotes lymphatic crystal removal.',
      animKey: 'inversion',
      isCooldown: true
    }
  },

  eczema_skin_rash: {
    warmup: [
      {
        id: 'warmup_eczema_sheetali',
        name: 'Sheetali Cooling Pranayama (Cooling Prana Breath)',
        sanskrit: 'Sheetali Pranayama Pitta Pacifier',
        duration: '3.0 min',
        target: 'Pitta Heat Dissipation',
        cue: 'Curl tongue into a tube or breathe through teeth. Inhale cool air, exhale warm through nose.',
        benefit: 'Directly lowers systemic core body heat and soothes capillary vasodilation.',
        whyRequired: 'Mandatory: Any physical activity without cooling breath causes sweat that stings raw lesions.',
        animKey: 'pranayama',
        isWarmup: true
      },
      {
        id: 'warmup_eczema_rom',
        name: 'Slow Non-Friction Joint Range of Motion',
        sanskrit: 'Tvacha Snigdha Chalana',
        duration: '2.0 min',
        target: 'Circulatory Lymph Flow',
        cue: 'Slowly glide joints without touching or rubbing inflamed skin areas.',
        benefit: 'Encourages cutaneous lymphatic drainage without friction irritation.',
        whyRequired: 'Mandatory: Prevents histamine release from skin mast cells.',
        animKey: 'warmup_joint_mobility',
        isWarmup: true
      }
    ],
    cooldown: {
      id: 'cooldown_eczema_savasana',
      name: 'Restorative Savasana in Cool Environment',
      sanskrit: 'Sheetala Savasana',
      duration: '3.0 min',
      target: 'Dermal Capillary Calming',
      cue: 'Lie quietly with loose clothing, focus on coolness spreading across skin.',
      benefit: 'Quells peripheral itching sensations and restores epidermal blood flow equilibrium.',
      animKey: 'childs_pose',
      isCooldown: true
    }
  },

  low_immunity: {
    warmup: [
      {
        id: 'warmup_immunity_thymus',
        name: 'Thymus Tapping & Diaphragmatic Breath',
        sanskrit: 'Ojas Vardhana Prana Priming',
        duration: '2.5 min',
        target: 'Thymus & Thoracic Duct Priming',
        cue: 'Gently tap sternum with fingertips while taking 10 deep, expansive nasal breaths.',
        benefit: 'Stimulates T-cell maturation in thymus and pumps the main thoracic lymphatic trunk.',
        whyRequired: 'Mandatory: Jumpstarts lymph circulation which has no muscular pump of its own.',
        animKey: 'warmup_diaphragmatic_breath',
        isWarmup: true
      },
      {
        id: 'warmup_immunity_catcow',
        name: 'Gentle Cat-Cow Spinal Lymph Wave',
        sanskrit: 'Marjaryasana Lymphatic Pump',
        duration: '2.0 min',
        target: 'Peyer’s Patches & Gut Lymph Awakening',
        cue: 'Move smoothly between cat and cow to rhythmically compress and decompress the abdomen.',
        benefit: 'Circulates 70% of the body’s immune cells situated along the gut wall.',
        whyRequired: 'Mandatory: Maximizes immunoglobin A delivery across respiratory mucous membranes.',
        animKey: 'cat_cow',
        isWarmup: true
      }
    ],
    cooldown: {
      id: 'cooldown_immunity_child',
      name: 'Restorative Child\'s Pose with Gentle Prana Rest',
      sanskrit: 'Salamba Balasana Ojas Integration',
      duration: '2.5 min',
      target: 'Immune Cytokine Optimization',
      cue: 'Rest forehead on mat, surrender all physical effort, breathe slowly into chest and back.',
      benefit: 'Allows endocrine system to allocate metabolic energy directly to immune synthesis.',
      animKey: 'childs_pose',
      isCooldown: true
    }
  }
};

// Enrich all conditions in window.PROBLEM_HEALING_DATABASE with warmup and cooldown protocols
(function enrichProtocols() {
  const db = (typeof window !== 'undefined' && window.PROBLEM_HEALING_DATABASE) ? window.PROBLEM_HEALING_DATABASE : null;
  if (!db) return;

  Object.keys(db).forEach(key => {
    const item = db[key];
    const protocols = WARMUP_COOLDOWN_MAP[key] || {
      warmup: [
        {
          id: `warmup_${key}_mobility`,
          name: 'Joint Synovial Pre-Warm-Up',
          sanskrit: 'Sandhi Chalana Prep',
          duration: '2.0 min',
          target: 'Synovial Fluid Circulation',
          cue: 'Smooth joint circles and gentle movements to circulate protective fluids.',
          benefit: 'Warms fascia and cartilage before therapeutic loading.',
          whyRequired: 'Mandatory: Prevents tissue strain from sudden cold movement.',
          animKey: 'warmup_joint_mobility',
          isWarmup: true
        },
        {
          id: `warmup_${key}_breath`,
          name: 'Diaphragmatic Breath & Gentle Spine Waves',
          sanskrit: 'Prana Sanchalana',
          duration: '2.0 min',
          target: 'Neuromuscular Priming',
          cue: 'Synchronize gentle spinal articulation with deep, unhurried nasal breathing.',
          benefit: 'Prepares the nervous system and relaxes protective muscular guarding.',
          whyRequired: 'Mandatory: Increases tissue elasticity and blood oxygenation.',
          animKey: 'cat_cow',
          isWarmup: true
        }
      ],
      cooldown: {
        id: `cooldown_${key}_child`,
        name: 'Restorative Somatic Integration',
        sanskrit: 'Balasana Vagus Reset',
        duration: '2.5 min',
        target: 'Parasympathetic Healing Activation',
        cue: 'Rest comfortably on mat, breathing deeply into lower back.',
        benefit: 'Shifts body into anabolic recovery and tissue repair mode.',
        animKey: 'childs_pose',
        isCooldown: true
      }
    };

    item.warmupExercises = protocols.warmup;
    item.cooldownExercise = protocols.cooldown;
  });
})();

if (typeof window !== 'undefined') {
  window.WARMUP_COOLDOWN_MAP = WARMUP_COOLDOWN_MAP;
}



