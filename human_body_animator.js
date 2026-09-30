/**
 * human_body_animator.js
 * Realistic Human Body Kinetic Animation Engine for PranaFit
 * Renders anatomically contoured human body silhouettes in motion for yoga poses,
 * remedial physical therapy, and warm-up exercises.
 */

(function (window) {
  'use strict';

  function getHumanDefs(uid) {
    return `
      <defs>
        <!-- Realistic Multi-Tone Athletic Human Skin Gradients -->
        <linearGradient id="humanSkin_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fbd5bf" />
          <stop offset="50%" stop-color="#e29f77" />
          <stop offset="100%" stop-color="#ba6f49" />
        </linearGradient>

        <!-- Ambient Occlusion / Background Limbs Shading (3D Depth) -->
        <linearGradient id="farSkin_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ba6f49" />
          <stop offset="60%" stop-color="#8d4c2b" />
          <stop offset="100%" stop-color="#693419" />
        </linearGradient>

        <!-- High-Performance Sleek Charcoal Athletic Top -->
        <linearGradient id="activeTop_${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#334155" />
          <stop offset="60%" stop-color="#1e293b" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>

        <!-- High-Performance Athletic Compression Tights -->
        <linearGradient id="activeTights_${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1e293b" />
          <stop offset="55%" stop-color="#0f172a" />
          <stop offset="100%" stop-color="#020617" />
        </linearGradient>

        <!-- Far Leg Compression Tights Shading -->
        <linearGradient id="farTights_${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0f172a" />
          <stop offset="100%" stop-color="#020617" />
        </linearGradient>

        <!-- Athletic Hair Silhouette -->
        <linearGradient id="humanHair_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#334155" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>

        <!-- Studio Yoga Mat -->
        <linearGradient id="studioMat_${uid}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#1e293b" />
          <stop offset="50%" stop-color="#059669" />
          <stop offset="100%" stop-color="#1e293b" />
        </linearGradient>

        <!-- Studio Floor Ambient Drop Shadow -->
        <radialGradient id="matShadow_${uid}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(15, 23, 42, 0.42)" />
          <stop offset="70%" stop-color="rgba(15, 23, 42, 0.14)" />
          <stop offset="100%" stop-color="rgba(15, 23, 42, 0)" />
        </radialGradient>

        <!-- Kinetic Working Muscle Activation Heatmap -->
        <linearGradient id="muscleGlow_${uid}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f59e0b" />
          <stop offset="50%" stop-color="#ef4444" />
          <stop offset="100%" stop-color="#f59e0b" />
        </linearGradient>

        <!-- Diaphragmatic Breath Wave Aura -->
        <radialGradient id="breathGlow_${uid}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(16, 185, 129, 0.28)" />
          <stop offset="75%" stop-color="rgba(16, 185, 129, 0.05)" />
          <stop offset="100%" stop-color="rgba(16, 185, 129, 0)" />
        </radialGradient>
      </defs>
    `;
  }

  function getMatAndFloor(uid) {
    return `
      <!-- Studio Ambient Shadow & Textured Yoga Mat -->
      <ellipse cx="80" cy="98" rx="64" ry="4.5" fill="url(#matShadow_${uid})" />
      <rect x="14" y="94" width="132" height="4.5" rx="2.2" fill="url(#studioMat_${uid})" stroke="#334155" stroke-width="0.5" />
    `;
  }

  function renderHumanBodyPoseSVG(animKey, mode) {
    const isLg = mode === 'lg';
    const width = '100%';
    const height = isLg ? '220' : '100%';
    const uid = Math.random().toString(36).slice(2, 7);
    const defs = getHumanDefs(uid);
    const matAndFloor = getMatAndFloor(uid);

    switch (animKey) {
      case 'cat_cow':
      case 'warmup_cat_cow':
        return `
          <svg viewBox="0 0 160 110" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" class="human-body-root">
            ${defs}
            ${matAndFloor}

            <!-- Breath Wave Expansion Aura -->
            <ellipse cx="78" cy="70" rx="${isLg ? 36 : 26}" ry="${isLg ? 22 : 16}" fill="url(#breathGlow_${uid})" style="animation: realisticChildsBreath 4s infinite ease-in-out;" />

            <!-- Far Limbs in Perspective Shadow -->
            <path d="M 40,94 C 40,82 42,75 44,69 C 47,69 48,74 47,94 Z" fill="url(#farSkin_${uid})" />
            <path d="M 118,94 C 118,80 119,74 116,68 C 121,68 123,78 122,94 Z" fill="url(#farTights_${uid})" />

            <!-- Undulating Torso with Athletic Top -->
            <path d="M 46,67 C 62,82 96,82 114,67 C 112,74 100,77 80,78 C 60,77 48,74 46,67 Z" fill="url(#activeTop_${uid})" style="animation: realisticCatCowTorso 4s infinite ease-in-out;" />

            <!-- Bio-Kinetic Spinal Wave Line -->
            <path d="M 46,70 C 65,85 95,85 114,70" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="3 2" style="animation: realisticCatCowSpine 4s infinite ease-in-out;" />

            <!-- Foreground Arm with Anatomical Contours -->
            <path d="M 49,69 C 51,77 51,85 50,94 L 43,94 C 43,86 44,78 46,69 Z" fill="url(#humanSkin_${uid})" />
            <ellipse cx="46" cy="94" rx="4.5" ry="1.5" fill="url(#humanSkin_${uid})" />

            <!-- Foreground Leg with Athletic Compression Tights & Calf Curve -->
            <path d="M 112,68 C 116,74 116,84 113,94 L 106,94 C 108,86 109,76 108,68 Z" fill="url(#activeTights_${uid})" />
            <path d="M 112,94 L 126,94 C 128,94 128,92 126,91 L 112,91 Z" fill="url(#humanSkin_${uid})" />

            <!-- Human Head with Cervical Spine & Athletic Hair Bun -->
            <g style="animation: realisticCatCowHead 4s infinite ease-in-out; transform-origin: 46px 68px;">
              <path d="M 46,68 C 43,65 38,64 36,60 C 34,55 36,49 42,49 C 48,49 50,55 48,60 C 47,64 48,66 46,68 Z" fill="url(#humanSkin_${uid})" />
              <path d="M 42,49 C 39,47 37,48 36,51 C 34,50 33,52 33,54 C 33,57 35,59 38,59 C 40,56 41,51 42,49 Z" fill="url(#humanHair_${uid})" />
              <circle cx="35" cy="56" r="1.2" fill="#ba6f49" />
            </g>

            <!-- Working Muscle Activation Heatmap Glow (Lumbar & Core) -->
            <line x1="68" y1="74" x2="94" y2="74" stroke="url(#muscleGlow_${uid})" stroke-width="3" stroke-linecap="round" style="animation: muscleEnergyGlow 2.5s infinite ease-in-out;" />

            ${isLg ? `
              <text x="80" y="18" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10" font-weight="700" fill="#059669">
                INHALE: Cow (Tilt Pelvis, Expand Sternum) ⟷ EXHALE: Cat (Dome Thoracic Spine, Engage Core)
              </text>
            ` : ''}
          </svg>
        `;

      case 'downward_dog':
        return `
          <svg viewBox="0 0 160 110" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" class="human-body-root">
            ${defs}
            ${matAndFloor}

            <!-- Far Limbs in Depth Shadow -->
            <polygon points="36,94 40,94 72,44 68,44" fill="url(#farSkin_${uid})" />
            <polygon points="126,94 122,94 84,40 88,40" fill="url(#farTights_${uid})" />

            <g style="animation: realisticDogBody 3.5s infinite ease-in-out;">
              <!-- Torso, Broad Scapular Girdle & Contoured Hips -->
              <path d="M 40,94 L 45,94 C 49,82 60,64 74,42 C 78,40 84,40 88,42 C 104,64 114,82 118,94 L 112,94 C 108,84 99,66 84,46 C 72,66 46,84 40,94 Z" fill="url(#activeTights_${uid})" />

              <!-- Grounded Forearm & Palm with Realistic Fingers -->
              <path d="M 42,94 L 47,94 L 62,68 L 57,68 Z" fill="url(#humanSkin_${uid})" />
              <ellipse cx="43" cy="94" rx="4" ry="1.5" fill="url(#humanSkin_${uid})" />

              <!-- Anatomical Head in Neutral Cervical Alignment -->
              <ellipse cx="58" cy="62" rx="6" ry="7.5" fill="url(#humanSkin_${uid})" transform="rotate(35 58 62)" />
              <ellipse cx="56" cy="60" rx="3.5" ry="4" fill="url(#humanHair_${uid})" transform="rotate(35 56 60)" />

              <!-- High Pelvic Apex (Ischial Tuberosities) -->
              <ellipse cx="80" cy="40" rx="7.5" ry="5.5" fill="url(#activeTop_${uid})" />
            </g>

            <!-- Bio-Kinetic Posterior Chain Stretch Line -->
            <path d="M 42,94 L 80,40 L 116,94" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="4 2" />

            <!-- Calves & Hamstrings Muscle Activation Heatmap Glow -->
            <line x1="90" y1="52" x2="108" y2="76" stroke="url(#muscleGlow_${uid})" stroke-width="2.5" stroke-linecap="round" style="animation: muscleEnergyGlow 2.5s infinite ease-in-out;" />

            <!-- Dynamic Heel Press into Mat -->
            <g style="animation: realisticDogHeel 3.5s infinite ease-in-out;">
              <path d="M 112,94 L 125,94 L 123,91 L 112,91 Z" fill="url(#humanSkin_${uid})" />
              <line x1="112" y1="94" x2="124" y2="94" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" />
            </g>

            ${isLg ? `
              <text x="80" y="16" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10" font-weight="700" fill="#047857">
                Lift Sitting Bones • Broaden Shoulder Girdle • Gently Sink Heels Toward Mat
              </text>
            ` : ''}
          </svg>
        `;

      case 'warrior2':
        return `
          <svg viewBox="0 0 160 110" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" class="human-body-root">
            ${defs}
            ${matAndFloor}

            <!-- Far Back Leg in Depth Perspective -->
            <polygon points="124,94 130,94 92,66 86,66" fill="url(#farTights_${uid})" />

            <g style="animation: realisticWarriorLunge 3s infinite ease-in-out;">
              <!-- Front 90-degree bent leg: Quadriceps contour & stacked knee -->
              <path d="M 85,63 C 74,60 62,60 50,63 L 50,69 C 62,72 74,72 85,69 Z" fill="url(#activeTights_${uid})" />
              <path d="M 47,66 C 46,74 46,84 47,94 L 53,94 C 54,84 54,74 53,66 Z" fill="url(#activeTights_${uid})" />
              <ellipse cx="49" cy="94" rx="5" ry="1.8" fill="url(#humanSkin_${uid})" />

              <!-- Active Working Muscle Glow on Front Quadriceps -->
              <line x1="56" y1="64" x2="78" y2="64" stroke="url(#muscleGlow_${uid})" stroke-width="3" stroke-linecap="round" style="animation: muscleEnergyGlow 2s infinite ease-in-out;" />

              <!-- Back Straight Leg with Anchored Heel -->
              <path d="M 85,66 C 96,74 108,84 122,94 L 128,94 C 116,82 102,70 85,63 Z" fill="url(#activeTights_${uid})" />
              <ellipse cx="125" cy="94" rx="6" ry="1.8" fill="url(#humanSkin_${uid})" />

              <!-- Regal Upright Torso with Breathing Sternum -->
              <g style="animation: realisticWarriorBreathing 3s infinite ease-in-out; transform-origin: 85px 65px;">
                <path d="M 81,65 C 81,56 82,48 83,38 C 87,38 89,38 90,38 C 91,48 90,56 89,65 Z" fill="url(#activeTop_${uid})" />
                <!-- Anatomical Head Gazing Over Front Fingertips -->
                <ellipse cx="85" cy="26" rx="6.5" ry="8" fill="url(#humanSkin_${uid})" />
                <path d="M 83,21 C 88,21 89,24 88,28 C 86,28 85,27 83,25 Z" fill="url(#humanHair_${uid})" />
                <circle cx="82" cy="25" r="1" fill="#ba6f49" />
              </g>

              <!-- Outstretched Horizontal Athletic Arms -->
              <path d="M 83,38 C 70,39 56,40 36,40 L 36,44 C 56,44 70,43 83,42 Z" fill="url(#humanSkin_${uid})" />
              <path d="M 90,38 C 104,39 118,40 134,40 L 134,44 C 118,44 104,43 90,42 Z" fill="url(#humanSkin_${uid})" />
              <!-- Fingertip focus accents -->
              <circle cx="35" cy="42" r="1.5" fill="#f59e0b" />
              <circle cx="135" cy="42" r="1.5" fill="#10b981" />
            </g>

            ${isLg ? `
              <text x="80" y="15" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10" font-weight="700" fill="#047857">
                Front Knee 90° Stacked Over Ankle • Ground Back Heel • Gaze Over Front Fingertips
              </text>
            ` : ''}
          </svg>
        `;

      case 'cobra':
        return `
          <svg viewBox="0 0 160 110" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" class="human-body-root">
            ${defs}
            ${matAndFloor}

            <!-- Grounded Lower Extremities along Mat -->
            <path d="M 88,94 C 104,94 122,94 138,94 L 138,90 C 122,90 104,90 88,90 Z" fill="url(#activeTights_${uid})" />
            <ellipse cx="140" cy="92" rx="4" ry="1.8" fill="url(#humanSkin_${uid})" />

            <!-- Gracefully Arching Upper Torso -->
            <g style="animation: realisticCobraRise 4s infinite ease-in-out; transform-origin: 88px 92px;">
              <path d="M 88,92 C 72,86 58,74 50,48 C 55,47 59,48 62,50 C 68,70 78,82 88,88 Z" fill="url(#activeTop_${uid})" />

              <!-- Lifted Head & Cervical Neck -->
              <ellipse cx="49" cy="36" rx="6.5" ry="8" fill="url(#humanSkin_${uid})" transform="rotate(-15 49 36)" />
              <path d="M 48,30 C 53,30 55,34 54,38 C 51,37 50,34 48,30 Z" fill="url(#humanHair_${uid})" />

              <!-- Grounded Supporting Hands with Bent Elbows -->
              <path d="M 60,60 C 58,72 56,84 54,94 L 46,94 C 48,84 52,72 56,60 Z" fill="url(#humanSkin_${uid})" />
              <ellipse cx="50" cy="94" rx="5" ry="1.5" fill="url(#humanSkin_${uid})" />

              <!-- Thoracic Spinal Arch Kinetic Line -->
              <path d="M 88,90 C 72,84 60,72 52,48" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="3 2" />

              <!-- Latissimus & Erector Spinae Heatmap -->
              <line x1="68" y1="72" x2="78" y2="82" stroke="url(#muscleGlow_${uid})" stroke-width="3" stroke-linecap="round" style="animation: muscleEnergyGlow 2s infinite ease-in-out;" />
            </g>

            ${isLg ? `
              <text x="80" y="18" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10" font-weight="700" fill="#059669">
                Roll Shoulders Down & Back • Open Pectorals • Engage Upper Back Extensors
              </text>
            ` : ''}
          </svg>
        `;

      case 'bridge':
        return `
          <svg viewBox="0 0 160 110" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" class="human-body-root">
            ${defs}
            ${matAndFloor}

            <!-- Grounded Head & Relaxed Shoulders on Mat -->
            <ellipse cx="28" cy="90" rx="7" ry="6.5" fill="url(#humanSkin_${uid})" />
            <path d="M 27,85 C 31,85 33,88 32,92 C 30,92 28,89 27,85 Z" fill="url(#humanHair_${uid})" />
            <path d="M 34,94 L 70,94 C 70,91 34,91 34,94 Z" fill="url(#humanSkin_${uid})" />

            <!-- Elevated Pelvis & High Torso Bridge Drive -->
            <g style="animation: realisticBridgeDrive 3.8s infinite ease-in-out;">
              <path d="M 35,90 C 50,70 70,54 85,54 C 95,54 105,60 114,64 L 111,70 C 102,66 94,60 84,60 C 68,60 50,76 37,92 Z" fill="url(#activeTop_${uid})" />

              <!-- Vertical Shins to Grounded Feet -->
              <path d="M 114,64 C 118,74 122,84 124,94 L 118,94 C 116,84 112,74 108,64 Z" fill="url(#activeTights_${uid})" />
              <ellipse cx="121" cy="94" rx="5.5" ry="1.8" fill="url(#humanSkin_${uid})" />

              <!-- Gluteus Maximus & Hamstrings Power Activation Heatmap -->
              <ellipse cx="84" cy="57" rx="7" ry="4" fill="url(#muscleGlow_${uid})" opacity="0.9" style="animation: muscleEnergyGlow 2s infinite ease-in-out;" />
            </g>

            ${isLg ? `
              <text x="80" y="20" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10" font-weight="700" fill="#059669">
                Drive Pelvis to Ceiling • Squeeze Glutes • Ground Heels Firmly into Mat
              </text>
            ` : ''}
          </svg>
        `;

      case 'childs_pose':
        return `
          <svg viewBox="0 0 160 110" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" class="human-body-root">
            ${defs}
            ${matAndFloor}

            <!-- Somatic Diaphragmatic Breath Wave Aura -->
            <ellipse cx="80" cy="80" rx="${isLg ? 48 : 36}" ry="${isLg ? 24 : 18}" fill="url(#breathGlow_${uid})" style="animation: realisticChildsBreath 4s infinite ease-in-out;" />

            <!-- Folded Hips Resting Comfortably on Heels -->
            <path d="M 88,94 C 104,94 120,94 126,94 C 128,94 128,88 126,84 C 122,78 114,76 108,76 C 96,76 86,84 88,94 Z" fill="url(#activeTights_${uid})" />

            <!-- Draped Spine along Thighs -->
            <path d="M 108,76 C 90,76 70,82 54,88 C 50,89 48,92 50,94 C 66,94 92,86 108,82 Z" fill="url(#activeTop_${uid})" />

            <!-- Forehead Resting Softly on Mat -->
            <ellipse cx="46" cy="89" rx="6.5" ry="6" fill="url(#humanSkin_${uid})" />
            <path d="M 45,84 C 48,84 50,87 49,90 C 47,90 46,87 45,84 Z" fill="url(#humanHair_${uid})" />

            <!-- Arms Extending Long on Mat with Open Palms -->
            <path d="M 52,86 C 42,88 32,92 20,94 L 20,91 C 32,89 42,86 52,84 Z" fill="url(#humanSkin_${uid})" />
            <ellipse cx="18" cy="93" rx="3.5" ry="1.5" fill="url(#humanSkin_${uid})" />

            ${isLg ? `
              <text x="80" y="22" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10" font-weight="700" fill="#047857">
                Slow Diaphragmatic Breath • Surrender Lumbar Spine to Gravity • Vagus Reset
              </text>
            ` : ''}
          </svg>
        `;

      case 'tree_pose':
        return `
          <svg viewBox="0 0 160 110" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" class="human-body-root">
            ${defs}
            ${matAndFloor}

            <g style="animation: realisticTreeBalance 4s infinite ease-in-out; transform-origin: 80px 94px;">
              <!-- Grounded Standing Leg in Athletic Tights -->
              <path d="M 77,58 C 77,70 78,82 78,94 L 83,94 C 83,82 84,70 84,58 Z" fill="url(#activeTights_${uid})" />
              <ellipse cx="80" cy="94" rx="6" ry="2" fill="url(#humanSkin_${uid})" />

              <!-- Bent Leg Resting against Inner Thigh -->
              <path d="M 80,58 C 70,64 60,68 56,70 C 58,74 68,72 78,74 Z" fill="url(#activeTights_${uid})" />
              <ellipse cx="78" cy="74" rx="3" ry="1.5" fill="url(#humanSkin_${uid})" />

              <!-- Regal Athletic Torso & Crown of Head -->
              <path d="M 77,58 C 77,48 78,40 78,34 C 82,34 83,34 84,34 C 84,40 84,48 84,58 Z" fill="url(#activeTop_${uid})" />
              <ellipse cx="81" cy="24" rx="6.5" ry="7.5" fill="url(#humanSkin_${uid})" />
              <path d="M 80,18 C 84,18 86,21 85,25 C 83,25 81,22 80,18 Z" fill="url(#humanHair_${uid})" />

              <!-- Anjali Mudra Prayer Hands at Heart Center -->
              <path d="M 73,42 C 77,38 81,36 81,36 C 81,36 85,38 89,42 Z" fill="url(#humanSkin_${uid})" />
              <circle cx="81" cy="36" r="3" fill="#f59e0b" style="animation: muscleEnergyGlow 2s infinite ease-in-out;" />
            </g>

            ${isLg ? `
              <text x="80" y="14" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10" font-weight="700" fill="#059669">
                Fix Drishti (Gaze) • Root Foot Arches • Lengthen Crown toward Sky
              </text>
            ` : ''}
          </svg>
        `;

      case 'boat_pose':
        return `
          <svg viewBox="0 0 160 110" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" class="human-body-root">
            ${defs}
            ${matAndFloor}

            <g style="animation: realisticBoatBalance 2.5s infinite ease-in-out; transform-origin: 80px 86px;">
              <!-- Sitting Bones Balance Base -->
              <circle cx="80" cy="86" r="5" fill="url(#activeTights_${uid})" />

              <!-- Angled Flat Back & Lifted Sternum -->
              <path d="M 80,86 C 72,74 64,60 52,48 C 55,46 59,48 62,50 C 72,62 78,74 80,86 Z" fill="url(#activeTop_${uid})" />
              <ellipse cx="48" cy="40" rx="6.5" ry="7" fill="url(#humanSkin_${uid})" transform="rotate(-25 48 40)" />
              <path d="M 45,35 C 49,35 51,38 50,42 C 48,41 46,38 45,35 Z" fill="url(#humanHair_${uid})" />

              <!-- Elevated Legs in Athletic Tights -->
              <path d="M 80,86 C 92,74 104,60 120,48 C 122,50 124,53 122,55 C 108,68 96,78 80,88 Z" fill="url(#activeTights_${uid})" />
              <ellipse cx="122" cy="50" rx="3.5" ry="2" fill="url(#humanSkin_${uid})" />

              <!-- Forward Reaching Arms Parallel to Floor -->
              <path d="M 64,58 L 112,58 L 112,54 L 64,54 Z" fill="url(#humanSkin_${uid})" />

              <!-- Core Isometric Muscle Activation Heatmap Glow -->
              <ellipse cx="78" cy="74" rx="7" ry="5" fill="url(#muscleGlow_${uid})" opacity="0.9" style="animation: muscleEnergyGlow 1.5s infinite ease-in-out;" />
            </g>

            ${isLg ? `
              <text x="80" y="20" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10" font-weight="700" fill="#047857">
                Balance on Sit Bones • Lift Sternum • Vigorously Engage Deep Transverse Abdominis
              </text>
            ` : ''}
          </svg>
        `;

      case 'triangle':
        return `
          <svg viewBox="0 0 160 110" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" class="human-body-root">
            ${defs}
            ${matAndFloor}

            <!-- Wide Grounded Stance -->
            <path d="M 80,60 C 68,72 56,84 46,94 L 52,94 C 62,84 72,72 80,63 Z" fill="url(#activeTights_${uid})" />
            <path d="M 80,60 C 92,72 106,84 122,94 L 128,94 C 114,84 100,72 80,63 Z" fill="url(#activeTights_${uid})" />
            <ellipse cx="48" cy="94" rx="5" ry="1.8" fill="url(#humanSkin_${uid})" />
            <ellipse cx="126" cy="94" rx="5" ry="1.8" fill="url(#humanSkin_${uid})" />

            <!-- Laterally Hinging Spine & Open Chest -->
            <g style="animation: realisticTriangleStretch 3.5s infinite ease-in-out; transform-origin: 80px 60px;">
              <path d="M 80,60 C 72,54 64,48 54,46 L 56,40 C 68,44 76,52 80,58 Z" fill="url(#activeTop_${uid})" />
              <ellipse cx="50" cy="38" rx="6" ry="6.5" fill="url(#humanSkin_${uid})" />

              <!-- Vertical Extended Arm Line with Open Heart -->
              <line x1="52" y1="78" x2="60" y2="16" stroke="url(#humanSkin_${uid})" stroke-width="4.5" stroke-linecap="round" />
              <circle cx="60" cy="16" r="3" fill="#f59e0b" style="animation: muscleEnergyGlow 2s infinite ease-in-out;" />

              <!-- Lateral Oblique & Hamstring Activation Heatmap -->
              <line x1="68" y1="52" x2="78" y2="58" stroke="url(#muscleGlow_${uid})" stroke-width="2.5" stroke-linecap="round" />
            </g>

            ${isLg ? `
              <text x="80" y="14" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10" font-weight="700" fill="#059669">
                Open Chest to Sky • Align Limbs in One Vertical Plane • Stretch Lateral Obliques
              </text>
            ` : ''}
          </svg>
        `;

      case 'pranayama':
        return `
          <svg viewBox="0 0 160 110" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" class="human-body-root">
            ${defs}
            <ellipse cx="80" cy="94" rx="46" ry="8" fill="url(#matShadow_${uid})" />

            <!-- Folded Padmasana (Lotus) Base -->
            <path d="M 45,92 C 60,96 100,96 115,92 C 110,84 100,80 80,80 C 60,80 50,84 45,92 Z" fill="url(#activeTights_${uid})" />

            <!-- Upright Vertebral Column & Broad Chest -->
            <path d="M 77,80 C 77,65 78,52 78,38 C 82,38 83,38 83,38 C 83,52 83,65 83,80 Z" fill="url(#activeTop_${uid})" />
            <ellipse cx="80" cy="26" rx="7" ry="8" fill="url(#humanSkin_${uid})" />
            <path d="M 78,20 C 82,20 84,23 83,27 C 81,26 80,23 78,20 Z" fill="url(#humanHair_${uid})" />

            <!-- Vishnu Mudra Hand at Nose -->
            <path d="M 80,52 C 86,46 84,38 82,34" fill="none" stroke="url(#humanSkin_${uid})" stroke-width="3" stroke-linecap="round" />

            <!-- Flowing Prana Breath Wave Particles (Ida & Pingala Channels) -->
            <circle cx="72" cy="32" r="3" fill="#10b981" style="animation: pranaParticleFlowLeft 3s infinite ease-in-out;" />
            <circle cx="88" cy="32" r="3" fill="#3b82f6" style="animation: pranaParticleFlowRight 3s infinite ease-in-out;" />

            ${isLg ? `
              <text x="80" y="15" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10" font-weight="700" fill="#059669">
                Left Nostril (Cooling Ida / Parasympathetic) ⟷ Right Nostril (Solar Pingala / Vitality)
              </text>
            ` : ''}
          </svg>
        `;

      case 'warmup_pelvic_tilts':
        return `
          <svg viewBox="0 0 160 110" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" class="human-body-root">
            ${defs}
            ${matAndFloor}

            <!-- Supine Torso & Relaxed Head on Mat -->
            <ellipse cx="32" cy="90" rx="7" ry="6.5" fill="url(#humanSkin_${uid})" />
            <path d="M 38,92 C 55,92 70,92 82,92" fill="none" stroke="url(#activeTop_${uid})" stroke-width="7" stroke-linecap="round" />

            <!-- Bent Knees with Feet Flat on Mat -->
            <path d="M 82,92 C 92,72 102,68 112,68 L 120,94" fill="none" stroke="url(#activeTights_${uid})" stroke-width="6" stroke-linecap="round" />
            <ellipse cx="120" cy="94" rx="5" ry="1.5" fill="url(#humanSkin_${uid})" />

            <!-- Dynamic Sacral Rocking Wave -->
            <g style="animation: realisticPelvicTiltRock 3s infinite ease-in-out; transform-origin: 82px 90px;">
              <path d="M 76,92 C 82,88 88,88 94,92" fill="none" stroke="#f59e0b" stroke-width="3" stroke-linecap="round" />
              <ellipse cx="82" cy="90" rx="5" ry="3" fill="url(#muscleGlow_${uid})" opacity="0.8" />
            </g>

            ${isLg ? `
              <text x="80" y="20" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10" font-weight="700" fill="#059669">
                Pre-Activation: Inhale Gentle Sacral Arch ⟷ Exhale Flatten Lumbar into Mat
              </text>
            ` : ''}
          </svg>
        `;

      case 'warmup_nerve_flossing':
      case 'sciatica_nerve':
        return `
          <svg viewBox="0 0 160 110" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" class="human-body-root">
            ${defs}
            ${matAndFloor}

            <!-- Supine Torso & Head -->
            <ellipse cx="30" cy="90" rx="7" ry="6.5" fill="url(#humanSkin_${uid})" />
            <path d="M 36,92 C 55,92 72,92 85,92 Z" fill="url(#activeTop_${uid})" stroke-width="7" stroke="url(#activeTop_${uid})" stroke-linecap="round" />

            <!-- Crossed / Flossing Leg with Kinetic Glide Animation -->
            <g style="animation: realisticNerveFlossMotion 3.5s infinite ease-in-out; transform-origin: 85px 92px;">
              <path d="M 85,92 C 90,74 95,60 100,52" fill="none" stroke="url(#activeTights_${uid})" stroke-width="6" stroke-linecap="round" />
              <path d="M 84,62 L 102,54 L 118,66" fill="none" stroke="url(#humanSkin_${uid})" stroke-width="5" stroke-linecap="round" />
              <!-- Sciatic Nerve Glide Glow Stream -->
              <path d="M 85,90 C 88,78 92,68 96,58" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="3 2" style="animation: muscleEnergyGlow 2s infinite ease-in-out;" />
            </g>

            ${isLg ? `
              <text x="80" y="20" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10" font-weight="700" fill="#059669">
                Sciatic Neural Flossing • Smooth Nerve Glide through Piriformis Tunnel without Strain
              </text>
            ` : ''}
          </svg>
        `;

      case 'warmup_joint_mobility':
      case 'neck_strain':
        return `
          <svg viewBox="0 0 160 110" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" class="human-body-root">
            ${defs}
            <ellipse cx="80" cy="94" rx="40" ry="6" fill="url(#matShadow_${uid})" />

            <!-- Seated Upright Spine & Broad Shoulders -->
            <path d="M 78,92 C 78,74 80,56 80,42" fill="none" stroke="url(#activeTop_${uid})" stroke-width="8" stroke-linecap="round" />
            <path d="M 64,52 C 74,48 86,48 96,52" fill="none" stroke="url(#humanSkin_${uid})" stroke-width="5" stroke-linecap="round" />

            <!-- Graceful Cervical Half-Circles & Chin-Tucks -->
            <g style="animation: realisticCatCowHead 3.5s infinite ease-in-out; transform-origin: 80px 42px;">
              <ellipse cx="80" cy="28" rx="7" ry="8" fill="url(#humanSkin_${uid})" />
              <path d="M 78,21 C 82,21 84,24 83,28 C 81,27 80,24 78,21 Z" fill="url(#humanHair_${uid})" />
              <!-- Decompression Retraction Vector -->
              <line x1="88" y1="28" x2="98" y2="28" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" />
            </g>

            ${isLg ? `
              <text x="80" y="16" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10" font-weight="700" fill="#047857">
                Gentle Cervical Retraction & Shoulder Melts • Lubricates C1-C7 Facet Joints
              </text>
            ` : ''}
          </svg>
        `;

      case 'warmup_diaphragmatic_breath':
        return `
          <svg viewBox="0 0 160 110" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" class="human-body-root">
            ${defs}
            <ellipse cx="80" cy="94" rx="42" ry="7" fill="url(#matShadow_${uid})" />

            <!-- Upright Seated Yogi with 360-degree Breathing Abdomen -->
            <path d="M 48,92 C 60,95 100,95 112,92 C 108,84 98,80 80,80 C 62,80 52,84 48,92 Z" fill="url(#activeTights_${uid})" />
            <path d="M 77,80 C 77,65 78,52 78,38 C 82,38 83,38 83,38 C 83,52 83,65 83,80 Z" fill="url(#activeTop_${uid})" />
            <ellipse cx="80" cy="26" rx="7" ry="8" fill="url(#humanSkin_${uid})" />

            <!-- Diaphragmatic Breath Expansion Aura -->
            <ellipse cx="80" cy="62" rx="18" ry="12" fill="url(#breathGlow_${uid})" style="animation: realisticChildsBreath 4s infinite ease-in-out;" />

            <!-- Hands resting gently on lower ribs / belly -->
            <path d="M 68,58 C 74,62 86,62 92,58" fill="none" stroke="url(#humanSkin_${uid})" stroke-width="4" stroke-linecap="round" />

            ${isLg ? `
              <text x="80" y="16" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10" font-weight="700" fill="#059669">
                360° Diaphragmatic Agni Breath • Stimulates Vagus Nerve & Abdominal Transit
              </text>
            ` : ''}
          </svg>
        `;

      case 'wall_angels':
        return `
          <svg viewBox="0 0 160 110" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" class="human-body-root">
            ${defs}
            <!-- Vertical Wall Guide -->
            <line x1="126" y1="14" x2="126" y2="96" stroke="#94a3b8" stroke-width="3" stroke-dasharray="4 4" />

            <!-- Upright Standing Human Body Flat Against Wall -->
            <path d="M 108,94 L 114,94 L 114,35 L 108,35 Z" fill="url(#activeTights_${uid})" />
            <ellipse cx="111" cy="24" rx="6.5" ry="7.5" fill="url(#humanSkin_${uid})" />

            <!-- Gliding Arms W to Y Trajectory with Trapezius Firing -->
            <g style="animation: realisticWallAngelGlide 3.5s infinite ease-in-out;">
              <path d="M 74,56 C 88,52 102,46 110,42" fill="none" stroke="url(#humanSkin_${uid})" stroke-width="5" stroke-linecap="round" />
              <circle cx="74" cy="56" r="3" fill="#f59e0b" style="animation: muscleEnergyGlow 2s infinite ease-in-out;" />
            </g>

            ${isLg ? `
              <text x="65" y="18" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10" font-weight="700" fill="#047857">
                Maintain Wrist & Elbow Wall Contact • Glide from W to Y • Fire Lower Trapezius
              </text>
            ` : ''}
          </svg>
        `;

      case 'squats':
        return `
          <svg viewBox="0 0 160 110" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" class="human-body-root">
            ${defs}
            ${matAndFloor}

            <g style="animation: realisticSquatDepth 3.5s infinite ease-in-out;">
              <!-- Deep Malasana Squat with Grounded Heels -->
              <path d="M 52,94 C 52,76 66,70 80,70 C 94,70 108,76 108,94 Z" fill="url(#activeTights_${uid})" />
              <ellipse cx="50" cy="94" rx="5" ry="1.8" fill="url(#humanSkin_${uid})" />
              <ellipse cx="110" cy="94" rx="5" ry="1.8" fill="url(#humanSkin_${uid})" />

              <!-- Upright Athletic Torso -->
              <path d="M 77,70 C 77,56 78,44 78,36 C 82,36 83,36 83,36 C 83,44 83,56 83,70 Z" fill="url(#activeTop_${uid})" />
              <ellipse cx="80" cy="24" rx="6.5" ry="7.5" fill="url(#humanSkin_${uid})" />

              <!-- Prayer Hands at Chest Gently Pressing Inner Knees -->
              <circle cx="80" cy="44" r="4" fill="#10b981" />
            </g>

            ${isLg ? `
              <text x="80" y="15" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10" font-weight="700" fill="#047857">
                Ground Heels • Knees Track Over Toes • Lengthen Spine in Anjali Mudra
              </text>
            ` : ''}
          </svg>
        `;

      case 'knee_joint':
        return `
          <svg viewBox="0 0 160 110" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" class="human-body-root">
            ${defs}
            ${matAndFloor}

            <!-- Seated Torso & Head -->
            <path d="M 50,92 C 50,70 54,54 56,40" fill="none" stroke="url(#activeTop_${uid})" stroke-width="7" stroke-linecap="round" />
            <ellipse cx="56" cy="28" rx="6.5" ry="7.5" fill="url(#humanSkin_${uid})" />

            <!-- Non-Weight-Bearing Gentle Knee Extension & Patellar Glide -->
            <path d="M 52,92 C 70,92 88,92 102,82 L 126,76" fill="none" stroke="url(#activeTights_${uid})" stroke-width="6" stroke-linecap="round" />
            <ellipse cx="128" cy="76" rx="4" ry="2" fill="url(#humanSkin_${uid})" />

            <!-- Synovial Lubrication Ring Pulsing Around Patella -->
            <circle cx="102" cy="82" r="6" fill="none" stroke="#10b981" stroke-width="2.5" stroke-dasharray="3 2" style="animation: muscleEnergyGlow 2s infinite ease-in-out;" />

            ${isLg ? `
              <text x="80" y="20" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10" font-weight="700" fill="#059669">
                Non-Weight Bearing Glides • Flushes Nutrient Synovial Fluid to Patella Cartilage
              </text>
            ` : ''}
          </svg>
        `;

      case 'low_lunge':
        return `
          <svg viewBox="0 0 160 110" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" class="human-body-root">
            ${defs}
            ${matAndFloor}

            <g style="animation: realisticLowLungePulse 3s infinite ease-in-out;">
              <!-- Back Leg Extended with Knee & Foot on Mat -->
              <path d="M 80,72 C 95,78 112,88 126,94" fill="none" stroke="url(#activeTights_${uid})" stroke-width="6" stroke-linecap="round" />
              <ellipse cx="128" cy="94" rx="4" ry="1.5" fill="url(#humanSkin_${uid})" />

              <!-- Front Bent Leg Stacked 90 Degrees -->
              <path d="M 52,94 L 52,72 L 80,72" fill="none" stroke="url(#activeTights_${uid})" stroke-width="6" stroke-linecap="round" />
              <ellipse cx="52" cy="94" rx="5" ry="1.8" fill="url(#humanSkin_${uid})" />

              <!-- Psoas Hip Opening Heatmap Glow -->
              <circle cx="84" cy="76" r="6" fill="url(#muscleGlow_${uid})" opacity="0.8" style="animation: muscleEnergyGlow 2s infinite ease-in-out;" />

              <!-- Upright Torso & Arms Reaching Upward in Crescent Arc -->
              <path d="M 80,72 C 78,56 76,44 76,36" fill="none" stroke="url(#activeTop_${uid})" stroke-width="7" stroke-linecap="round" />
              <ellipse cx="76" cy="24" rx="6.5" ry="7.5" fill="url(#humanSkin_${uid})" />
              <path d="M 76,36 C 72,26 68,16 66,12" fill="none" stroke="url(#humanSkin_${uid})" stroke-width="4" stroke-linecap="round" />
            </g>

            ${isLg ? `
              <text x="80" y="16" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10" font-weight="700" fill="#047857">
                Sink Hips Down & Forward • Extend Spine Upward • Directly Opens Tight Psoas
              </text>
            ` : ''}
          </svg>
        `;

      case 'inversion':
        return `
          <svg viewBox="0 0 160 110" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" class="human-body-root">
            ${defs}
            <!-- Vertical Wall -->
            <line x1="126" y1="12" x2="126" y2="94" stroke="#94a3b8" stroke-width="3" />

            <!-- Supine Torso on Mat -->
            <ellipse cx="40" cy="90" rx="7" ry="6.5" fill="url(#humanSkin_${uid})" />
            <path d="M 46,92 L 120,92" stroke="url(#activeTop_${uid})" stroke-width="7" stroke-linecap="round" />

            <!-- Legs Resting Vertically Up Wall -->
            <path d="M 120,92 L 124,32" stroke="url(#activeTights_${uid})" stroke-width="6" stroke-linecap="round" />
            <ellipse cx="124" cy="30" rx="3" ry="4" fill="url(#humanSkin_${uid})" />

            <!-- Lymphatic Downward Drainage Vector Particles -->
            <circle cx="120" cy="46" r="2.5" fill="#3b82f6" style="animation: pranaParticleFlowLeft 2.5s infinite;" />
            <circle cx="120" cy="66" r="2.5" fill="#10b981" style="animation: pranaParticleFlowLeft 2.5s infinite;" />

            ${isLg ? `
              <text x="75" y="20" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10" font-weight="700" fill="#059669">
                Viparita Karani • Promotes Venous Return • Calms High Blood Pressure & Fatigue
              </text>
            ` : ''}
          </svg>
        `;

      default:
        // High-fidelity Cat-Cow fallback
        return renderHumanBodyPoseSVG('cat_cow', mode);
    }
  }

  // Expose globally
  window.renderHumanBodyPoseSVG = renderHumanBodyPoseSVG;

})(window);
