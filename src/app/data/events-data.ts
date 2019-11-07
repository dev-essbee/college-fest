import {Event} from '../event';
// TODO: Add singing event
export let categories = [{id: 'c0', value: 'Cultural'}, {id: 't0', value: 'Technical'}, {
  id: 'm0',
  value: 'Management'
}, {id: 'd0', value: 'Design'}, {id: 'l0', value: 'LAN Gaming'}];
const baseLoc = '../../assets/minimg/events/640p/';
// const baseLocLarge = '../../assets/minimg/events/1080p/';
export let events: Event[] = [
    {
      id: '0',
      team: false,
      maxTeamMembers: 0,
      minTeamMembers: 0,
      name: 'STACKITECTURE',
      smallImg: baseLoc + 'SKACKITECTURE1.jpg',
      // largeImg: baseLocLarge + 'stackitecture1.jpg',
      category: 'd0',
      des: 'Show your creativity with stacks. Pile up the wooden pieces in a ' +
        'creative and stable form using your mind and some techniques without any gum/thread. ',
      judgement: ['Stability', 'Height', 'Looks / aesthetics', 'Interesting / creative', 'Challenging '],
      rules: ['Time allotted will be 1 hour. ',
        'Participants will be provided by 100 pieces of wood. ' +
        'Participant must create a tower or building with those pieces making it stable and attractive. ',
        'Usage of string or glue or any other material is now allowed. '],
      startTime: '10-NOV-2019: 2:00 PM',
      endTime: '3:00 PM',
      fee: '150',
      prize: '1500.'

    },
    {
      id: '1',
      team: true,
      maxTeamMembers: 2,
      minTeamMembers: 2,
      name: 'FACE MASK CHALLENGE',
      smallImg: baseLoc + 'facemaskchallenge1.jpg',
      // largeImg: baseLocLarge + 'facemaskchaleenge.jpg',
      category: 'd1',
      des: 'Face painting is a fun way to dress up—no costume required!' +
        'It is the ultimate crowd pleaser and always one of the most popular happenings at any event.' +
        'Participate and transform faces into something magical and memorable.',
      judgement: ['Aesthetics/looks', ' Skill with material', 'Presentation through gesture/pose', 'Creativity'],
      rules: ['There can be only 2 members in a team: one who will paint and other who will wear the mask.',
        'A plastic mask will be provided as a base.' +
        'Time limit will be of 1.5 hours.',
        'Theme will be given on the spot.',
        'Usage of phone is not allowed.',
        'Participants must carry their own material, whatever required.',
        'Participants will be provided with materials like newspaper, glue, sheets ' +
        'etc so that they can make additional items with mask, if time left. (according to the theme)'],
      startTime: '10-NOV-2019: 1:00 PM',
      endTime: '2:00 PM',
      fee: '150',
      prize: '1500.'
    },
    {
      id: '2',
      team: false,
      maxTeamMembers: 0,
      minTeamMembers: 0,
      name: 'CLICK-O-GRAPHY',
      smallImg: baseLoc + 'ClickOgraphy1.jpg',
      // largeImg: baseLocLarge + 'clickOgraphy.jpg',
      category: 'd2',
      des: '“Taking an image, freezing a moment, reveals how rich reality truly is. ”' +
        'SABRANG 2K19 invites you to capture and freeze the moment in Click-O-Graphy: Photography challenge.' +
        'themes: Architecture, Leading lines, Nature and landscape, Emotions, Environments, ' +
        'Objects in frames, Long Exposure',
      rules: ['Photographer can choose any five themes out of the mentioned themes.',
        'Photo must be clicked within the campus permises ' +
        'Use of given props is compulsory for any 3 photos out of 5. ',
        'Photographer can make all basic adjustment like exposure, contrast. ',
        'Photographer can click photos from mobile or any professional camera. ',
        'Pictures must be in the format SerialNo_Theme.',
        'Rules must be followed else entry will be discarded.'],
      judgement: [],
      startTime: '09-NOV-2019: 11:00 AM',
      endTime: '9:00 PM',
      fee: '150',
      prize: '1500. '
    },
    {
      id: '3',
      team: false,
      maxTeamMembers: 0,
      minTeamMembers: 0,
      name: 'DJ WAR ',
      smallImg: baseLoc + 'dj war1.jpg',
      // largeImg: baseLocLarge + 'djwar.jpg',
      category: 'c0',
      des: 'Think you can spin; here is a live platform for you to do the same. Move ' +
        'the crowd with your beats and get into the grove with War of Dj’s. ' +
        'A live battle with Dj’s from different genres, come spin with us. ',
      judgement: ['Equipment usage', 'Tuning', 'Mixing', 'Scratching', 'Crowd cheering'],
      rules: ['All the participants will get 15-20 minutes for their performance. ',
        'No vulgar or abusive content should be played. ' +
        'Using copied or original tracks without live mixing will be disqualified.',
        'The optional equipment provided will be 2 Mixers, and microphone. ',
        'Any other equipment like headphones, laptops must be carried by the participant. ',
        'Any damage done to the equipment will be beard by the player only.',
        'Each participant will get only 5-7 min for setting up their Equipment. '],
      startTime: '08-NOV-2019: 5:00 PM',
      endTime: '10:00 PM',
      fee: '1000',
      prize: '10,000 . '
    },
    {
      id: '4',
      team: true,
      maxTeamMembers: 20,
      minTeamMembers: 1,
      name: 'PAGE TO STAGE (Skit)',
      smallImg: baseLoc + 'page2stage1.jpg',
      // largeImg: baseLocLarge + 'page2stage.jpg',
      category: 'c1',
      des: 'Curtain raises and it’s time to showcase your talent. Actions speak louder than words will just not remain a quote, ' +
        'the spectators and audience will see it on their own and applaud its rise as well. Come with your ideas in ' +
        'form of action on stage, give and share a moment of laughter, a sigh of relief, a sob of sorrow.' +
        'A team will prepare a creative skit on any Social or Environment Issues ',
      judgement: ['Theme', 'Creativity', 'Entertainment Value', 'Coordination & Message'],
      rules: ['Group entries are not bounded by the restriction of team size and no. of participants. ',
        'Time duration will be 15-20 minutes. ',
        'If your skit runs overtime, a time penalty will be deducted from your score or you may be disqualified.' +
        'Team must bring all props and costumes required during the skit.',
        'Skit content should be as per given theme. Offensive language is not permitted.  ' +
        'Judges reserve the right to disqualify or remove a skit from the Sabrang if they feel the contents are inappropriate.',
        'Please do not leave anything on stage when you exit. ' +
        'JKLU is not responsible for anything lost while participating in the competition. ',
        'If you have music or pre-recorded dialogue for your skit, please have your skit audio on a ' +
        'pendrive ready to play as one single track, edited exactly as you want it to sound. ',
        'Decision of the judges will be final.'],
      startTime:
        '10-NOV-2019: 12:00 PM',
      endTime:
        '3:00 PM',
      fee:
        '350',
      prize:
        '3,500 .',

    },
    {
      id: '5',
      team: true,
      maxTeamMembers: 8,
      minTeamMembers: 3,
      name: 'ROCK - O - PHONIX (BAND JAM)',
      smallImg: baseLoc + 'bandjam1.jpg',
      // largeImg: baseLocLarge + 'bandjam.jpg',
      category: 'c2',
      des: 'Get ready to sway your hands and bang your head to energizing and rocking beats of Rocko-O-Phonix. ',
      judgement: ['Planning/preparedness', 'Originality',
        'Stage Presence ', 'Quality of performance', 'Interface with audience'],
      rules:
        ['Participants must report 45 minutes before the competition. ',
          'Time limit for each band performance is of 20  minutes including sound check. ' +
          'If the time limit exceeds 20 min. then sound will be cut. ',
          'The decision of organizers regarding Stage lineup will be final. ',
          'Obscenity of any kind is not allowed and will lead to disqualification. ',
          'The decision of the judges will be final, and no one shall question it. ',
          'Bands have to bring their own instruments rather than drum kit. Drum Kit will be provided with basic cymbal set ' +
          'i.e. Hi Hats, Crash, Ride. Apart from this if any participant wishes to use any other cymbal ' +
          'then he should bring his own cymbal with proper boom stand. ',
          'Apart from this if any participant wishes to use any other cymbal then he should bring his own cymbal with proper boom stand. ',
          'Violation of rules will lead to disqualification. '],
      startTime:
        '09-NOV-2019: 05:00 PM',
      endTime:
        '09:00 PM',
      fee:
        '1200',
      prize:
        '10,000 '
    },
    {
      id: '6',
      team: true,
      maxTeamMembers: 4,
      minTeamMembers: 4,
      name: 'SCAVENGERS HUNT (TREASURE HUNT)',
      smallImg: baseLoc + 'treasurehunt1.jpg',
      // largeImg: baseLocLarge + 'scavengershunt.jpg',
      category: 'c3',
      des:
        'A treasure hunt is one of many different types of games for players ' +
        'who try to find hidden objects or places by following a series of clues. ' +
        'Treasure hunt games may be an indoor or outdoor activity. ' +
        'Outdoors it can be played in a garden, indoors it can be played in a specific room, ' +
        'which would make the work of hiding the clues harder.',
      judgement:
        ['The team arriving first with all the 4 members and the TREASURE will be declared as the winner. ',
          'In case of two teams arriving simultaneously on the finish line, the team with maximum no. of clues will make way. ',
          'In case of two teams arriving simultaneously on the finish line with equal no. of clues, ' +
          'the tie breaker would comprise of solving a riddle. '],
      rules:
        ['Single person won’t be entertained. ',
          'This is strictly a pair game. Participants can’t change their partners after registration. ',
          'Usage of electronic gadgets is not allowed while you’re in-game.,' +
          'In case contestants face problems while solving riddles and puzzles; ' +
          'we have organized on-site gamblers, who will give them needed help, ' +
          'but it will result in deduction of 10 points from their overall score. ',
          'Hiding, misplacing, or destroying the clues of other teams shall lead to disqualification. ',
          'Once the game is on, it won’t be paused unnecessarily. '],
      startTime:
        '09-NOV-2019: 12:00 PM',
      endTime:
        '06:00 PM',
      fee:
        '250',
      prize:
        '2000 '
    },
    {
      id: '7',
      team: false,
      maxTeamMembers: 0,
      minTeamMembers: 0,
      name:
        'TALENTX',
      smallImg:
        baseLoc + 'talentX1.jpg',
      // largeImg: baseLocLarge + 'talentX.jpg',
      category: 'c4',
      des:
        'Talent is defined as someone who has a natural ability to be good at something, especially without being taught. ' +
        'A Talent show is an event where participants perform talents across Poetry, ' +
        'Whistle mania, Stand-up comedy. Get ready to showcase your talent this SABARNG 2K19 and win exciting prizes.',
      judgement:
        ['Content', 'Delivery', 'Gestures', 'Stage presence', 'Audience engagement', 'Overall Impact'],
      rules:
        ['Any kind of non-acceptable content would be disqualified. ',
          'Time limit is 4-5 minutes. ',
          'Negative marking for exceeding time limit. If the time limit is exceeded, only the part of the ' +
          'content that was served within the time allotted ' +
          'shall be considered ',
          'Participants can show their performance in any way they want but it should be decent. ',
          'Participants may perform only one time during the show. Any participant who participates in more than one ' +
          'performance will be disqualified from both the acts.',
          'Only solo performances are allowed.',
          'Use of props is allowed, brought in by the participant himself. The organisers hold the discretion ' +
          'of allowing it on stage.',
          'The decision of the judges would be considered final. '],
      startTime:
        '09-NOV-2019: 12:00 PM',
      endTime:
        '02:00 PM',
      fee:
        '150',
      prize:
        '1500. '
    },
    {
      id: '8',
      team: true,
      maxTeamMembers: 15,
      minTeamMembers: 11,
      name:
        'VOGUE GALA - THE FASHION SHOW',
      smallImg:
        baseLoc + 'vogue-gala1.jpg',
      // largeImg: baseLocLarge + 'voguegala1.jpg',
      category: 'c5',
      des:
        'Fashion show is an event at which collection of designer clothing are modelled for audience.' +
        ' We bring out the best of symbiosis between models and designers to ' +
        'define new fashion statements with the picturesque visuals on stage. ' +
        'If you think you can captivate the crowd with your panache and style ' +
        'and win the hearts of our esteemed judges with your confidence, this is it! ',
      judgement:
        ['Creativity ', 'Theme ', 'Choreography ', 'Walking stance ', 'Usage of props'],
      rules:
        ['Maximum of 15 participants can perform on stage. However, all participants need not be on stage at the same time. (minimum 10). ',
          'Time limit 12 minutes (curtain to curtain). Points will be deducted for exceeding the time limit. ',
          'One of the team members can explain their views of dressing to judges. ',
          'Backstage helpers should not exceed. ',
          'Two members must be present to provide cues for musical night. ',
          'The lightning of candles, matches or cigarettes will not be allowed on stage and violation will result in disqualification. ',
          'A T-shaped extension will be provided to the stage. Both the stage and the extension may be used as the \'walking - ramp\'. ',
          'Teams are requested to confirm their participation in advance by emailing to the coordinator\'s. ',
          'Teams must report to the department of theatre room immediately after the registration at the control booth. ',
          'Teams must bring a pen drive containing their soundtrack. The soundtrack should be in MP3 format. ',
          'The participants must report at least 1.5 hours before the event is scheduled.'],
      startTime:
        '10-NOV-2019: 05:00 PM',
      endTime:
        '9:00 PM',
      fee:
        '800',
      prize:
        '6500. '
    },
    {
      id: '9',
      team: false,
      maxTeamMembers: 0,
      minTeamMembers: 0,
      name:
        'Beats N Steps (Solo Dance)',
      smallImg:
        baseLoc + 'bnsSolo.jpg',
      // largeImg:baseLocLarge + 'bnsSolo.jpg',
      category:
        'c6',
      des:
        'Dance is not merely body movement – it is like poetry in motion as someone said. ' +
        'With thoughts, emotions, expressions and elegant movements. It brings alive the meaning.' +
        'Dance is an art which is done with body, mind and soul.',
      judgement:
        ['Rhythm ', 'Formation ', 'Synchronization ', 'Expressions ', 'Costumes ', 'Makeup ', 'Setup ', 'Overall effects '],
      rules:
        ['Time limit is 6-10 minutes for each performance. Negative marking for exceeding the time limit.',
          'No props will be provided by the coordinators. Participants can carry their own props. ' +
          'The participants are requested to bring a backup of their song to avoid technical disturbance.' +
          'Out of which, they are also requested to submit a copy of the song with the coordinator of the event. ',
          'Green room would be given for changing purpose. ',
          'Dance performance should not convey any indecent gestures. ',
          'Each entry must be completed with a non-refundable cash as per the registration guidelines. ',
          'Decision of the judges will be final. '],
      startTime:
        '10-NOV-2019: 3:00 PM',
      endTime:
        '05:00 PM',
      fee:
        '150',
      prize:
        '2000. '
    },

    {
      id: '10',
      team: true,
      maxTeamMembers: 15,
      minTeamMembers: 4,
      name:
        'Beats N Steps (Group Dance)',
      smallImg:
        baseLoc + 'bnsgroup.jpg',
      // largeImg:baseLocLarge + 'bnsgroup.jpg',
      category:
        'c7',
      des:
        'Dance is not merely body movement – it is like poetry in motion as someone said. ' +
        'With thoughts, emotions, expressions and elegant movements. It brings alive the meaning.' +
        'Dance is an art which is done with body, mind and soul. ',
      judgement:
        ['Rhythm ', 'Formation ', 'Synchronization ', 'Expressions ', 'Costumes ', 'Makeup ', 'Setup ', 'Overall effects '],
      rules:
        ['Time limit is 3-4 minutes for each performance. Negative marking for exceeding the time limit.',
          'Each team may have 4-15 members. ' +
          'The participants are requested to bring a backup of their song to avoid technical disturbance.' +
          'Out of which, they are also requested to submit a copy of the song with the coordinator of the event. ',
          'No props will be provided by the coordinators. Participants can carry their own props. ',
          'Green room would be given for changing purpose. ',
          'Dance performance should not convey any indecent gestures. ',
          'Each entry must be completed with a non-refundable cash as per the registration guidelines. ',
          'Decision of the judges will be final. '],
      startTime:
        '10-NOV-2019: 3:00 PM',
      endTime:
        '05:00 PM',
      fee:
        '300',
      prize:
        '3000. '
    },

    {
      id: '11',
      team: false,
      maxTeamMembers: 0,
      minTeamMembers: 0,
      name: 'BATALLA DE CYPHERS - RAP',
      smallImg: baseLoc + 'bdc.jpg',
      // largeImg: baseLocLarge + 'bdc.jpg',
      category: 'c8',
      des: 'Rapping is a musical form of vocal delivery that incorporates rhyme, rhythmic speech,' +
        ' and street vernacular, which is performed or chanted in a variety of ways, usually over a ' +
        'backing beat or musical accompaniment.',
      judgement: ['WConfidence', 'Voice quality', 'Clarity', 'Rhythm', 'Their appeal to the audience.'],
      rules: ['Time allotted for each performance is 3-4 minutes. ',
        'Participants will not be allowed to refer to the lyrics while raping.',
        'The rap should not be bite (COPY) from anywhere.',
        'The rap should not have any slangs or derogatory language else the contestant will be considered as disqualify.'],
      startTime: '09-NOV-2019: 02:00 PM',
      endTime: '03:00 PM',
      fee: '150',
      prize: '1100. '
    },
    {
      id: '12',
      team: false,
      maxTeamMembers: 0,
      minTeamMembers: 0,
      name: 'BATALLA DE CYPHERS - Beat Boxing',
      smallImg: baseLoc + 'beatbox.jpg',
      // largeImg: baseLocLarge + 'beatboxing.jpg',
      category: 'c9',
      des: 'Beat-boxing is a form of vocal percussion which primarily involves the art of producing drum beats, ' +
        'rhythm and musical sounds using one’s mouth, lips, tongue and voice. It may also involve singing, ' +
        'vocal imitation of turntablism, the simulation of hours, strings and other musical instruments.',
      judgement: ['Confidence', 'Voice quality', 'Clarity', 'Rhythm', 'Their appeal to the audience.'],
      rules: ['Time allotted for each performance is 3-4 minutes ',
        'The competition is open to beat boxers only.',
        'The beats should not be bite (COPY) from anywhere.',
        'There should not be any slangs or derogatory language else the contestant will be considered as disqualify.'],
      startTime: '09-NOV-2019: 02:00 PM',
      endTime: '03:00 PM',
      fee: '150',
      prize: '1100. '
    },
    {
      id: '13',
      team: false,
      maxTeamMembers: 0,
      minTeamMembers: 0,
      name: 'SINGING PALOOZA - Solo Singing ',
      smallImg: baseLoc + 'singingpalooza1.jpg',
      // largeImg: baseLocLarge + 'beatboxing.jpg',
      category: 'c10',
      des: 'Music is the greatest communication in the world. Even if people dont ' +
        'understand the language that youre singing in, they still know good music ' +
        'when they hear it."The stage is set for the melodious showstoppers to gear up ' +
        'their “sur and taal” in front of a capacity crowd.GearUp and participate in ' +
        '“Singing Palooza” this SABRANG to let people hear your music and win exciting prize. ',
      judgement: ['Vocal Quality',
        'Vocal Range',
        'Technicalities',
        'Song selection',
        'Stage Presence'],
      rules: ['Registration will close 15 minutes before the event starts.',
        'There is no boundation of language and genre in any round.',
        'The decision of organizers regarding Stage line up will be final.',
        'Obscenity of any kind is not allowed and will lead to disqualification.',
        'Violation of rules will lead to disqualification.'],
      startTime: '09-NOV-2019: 03:00PM',
      endTime: '05:00 PM',
      fee: '150',
      prize: '2000. '
    },
    {
      id: '14',
      team: false,
      maxTeamMembers: 0,
      minTeamMembers: 0,
      name:
        'AUTOCAD',
      smallImg:
        baseLoc + 'autocad1.jpg',
      // largeImg: baseLocLarge + 'autocad.jpg',
      category: 't0',
      des:
        'Participants has to replicate an given 2d autocad design regardless of subject. ' +
        'The timing will be counted. ',
      judgement:
        ['Completeness', 'Accuracy', 'Time Stamp', 'Dimensioning'],
      rules:
        ['AutoCAD design will be provided. ',
          'Limited one entry per student. ' +
          'You have to replicate the same design in AutoCAD. ',
          'Completion in 30 min will get you full 10 marks for time completion. ',
          'After 30 min for each 5min there will be a deduction of 2 points.',
          'A total of 50 minutes will be awarded for completion.'],
      startTime:
        '10-NOV-2019: 03:00 PM',
      endTime:
        '05:00 PM',
      fee:
        '150',
      prize:
        '1500. '
    }, {
      id: '15',
      team: false,
      maxTeamMembers: 0,
      minTeamMembers: 0,
      name:
        'CODEXTREME',
      smallImg:
        baseLoc + 'codextreme1.jpg',
      // largeImg: baseLocLarge + 'codextreme.jpg',
      category: 't1',
      des:
        'This is a three hour long competitive programming competition that will be held in two rounds: ' +
        'First round has already been held on HackerEarth ' +
        'and second round will be the onsite final round. ' +
        'This event is based on time, complexity, algorithm designing and executing code in ' +
        'which participants are required to solve the given problem set, generating output.',
      judgement:
        ['Scoring: Each question will have varying marks based on the difficulty level. Score distribution will be provided beforehand. ',
          'Programs will be evaluated by the online judges of HackerEarth (online round) and CodeChef (final round).'],
      rules:
        ['Selected students from the online round will be invited for the onsite final round.',
          'Participants can also participate directly in the onsite final round.',
          'Participants need to bring their own laptops during the final round.',
          'However, Internet facility will be provided to the participants.',
          'Both the rounds will have allotted time of 3 hours.',
          'Programmers are free to use any programming language supported by online judges of HackerEarth and CodeChef.',
          'All students with a valid identity card of their respective educational institutes are eligible to participate in the event. ',
          'The organisers reserve the rights to change any or all of the above rules as they deem fit. ' +
          'Change in rules, if any, will be highlighted on the website and notified to the registered teams.',
          'Note that at any point of time, the latest information will be that which is on the site. ' +
          'The information provided in the pdf downloaded earlier may not be the latest. '],
      startTime:
        '10-NOV-2019: 02:00 PM',
      endTime:
        '05:00 PM',
      fee:
        '150',
      prize:
        '1500. '
    },
    {
      id: '16',
      team: true,
      maxTeamMembers: 4,
      minTeamMembers: 2,
      name:
        'Robo-Soccer',
      smallImg:
        baseLoc + 'robosoccer1.jpg',
      category: 't2',
      des:
        'Teams have to build a manually controlled bot which can do simple tasks of pushing a tennis ball and putting them' +
        'in targeted goal post of opponent player such that in doing so it may not harm the opponent\'s bot.' +
        ' If the opponent bot is harmed in any case the player gets disqualified immediately. The bot can be wired or wireless. ' +
        'In case the participants use wireless mechanism, they must use dual frequency remote.' +
        'Robot Specifications: \n' +
        '1. Dimensions of the robot should not exceed 30cm x 30cm x 30cm. (lxbxh)\n' +
        '2. Weight of the robot should not exceed 5 kg.\n' +
        '3. Any mechanism of the robot should not damage the arena.\n' +
        '4. Any mechanism should not be used to harm the opponent’s robots.\n' +
        '5. The maximum voltage in the circuit should not exceed 12 Volt DC at any time.\n' +
        '6. To avoid noise between wireless communication during the event, the team can\n' +
        'use remote of 2.4GHz. (optional).\n' +
        '7. Only up to 5% tolerance will be allowed else the bot will be unfit for the game and\n' +
        'will lead to disqualification.',
      judgement:
        ['The team should score the maximum number of goals in order to win the match.',
          'In case of a tie, an additional 1 min will be given for competing. If the tie still persists, ' +
          'coordinators will decide the winner on the basis of performance. '],
      rules:
        ['The robot will be controlled by wired/wireless remote from outside the arena. ',
          'In case of wired bots, the length of wire should be minimum 5 meters so that the ' +
          'wire remains slack at any instant of time. If the participants use wireless ' +
          'mechanism then it is mandatory to use a dual-frequency remote. ' +
          'If any team is found harming the arena, the team will be disqualified on the spot. ',
          'The participants have to carry their own power supply. Only 220V AC socket will be provided by the organizers. ',
          'This is a one-V-one match. ',
          'Our team will not be responsible for any damage done to the robot in the arena. ',
          'Our team will not be responsible for the noises created due to the ' +
          'same frequencies in wireless communication between two teams during the game. ',
          'Teams have to be present on scheduled time and delay will lead to disqualification.',
          'In case of any discrepancies, the decision of the event coordinators will be final.',
          'The match will have two halves, each of 3 min with a breaktime of 1 min between the two halves. ',
          'If any bot gets technical fault during match they will get 1-2 minutes to repair ' +
          'it and they can take technical time out twice in whole match. ',
          'Dimensions of the robot should not exceed 30cm x 30cm x 30cm.(lxbxh). ',
          'The robot can move in the whole arena. ',
          'Any mechanism of the robot should not damage the arena. ',
          'Any mechanism should not be used to harm the opponent’s robots. ',
          ' Violation of any of the above rules will lead to disqualification. ',
          'To avoid noise between wireless communication during the event, the team can use remote of 2.4GHz. (optional). ',
          ' Team Size: 2-4 members. '],
      startTime:
        '10-NOV-2019: 02:00 PM',
      endTime:
        '03:00 PM',
      fee:
        '150',
      prize:
        '1500. '
    },
    {
      id: '17',
      team: true,
      maxTeamMembers: 2,
      minTeamMembers: 2,
      name:
        'THE LOGICIANS',
      smallImg:
        baseLoc + 'logicians1.jpg',
      // largeImg: baseLocLarge + 'logicians.jpg',
      category: 'm0',
      des:
        'How logically you debate? Well, if you are an engaging and logical debater, ' +
        'then “The Logicians” provides you a platform to impress, convince, and win the rebuttal. ' +
        'The stage is yours; speak, evolve, convince, negate, and be the best ‘Logician’.',
      judgement:
        ['Clarity', 'Use of argument', 'Use of cross-examination and rebuttal', 'Presentation style'],
      rules:
        ['Number of ‘Logicians’ in each team must be 2 (two) – one be the Speaker, and the other be Negator.',
          'There will be a Debate Moderator – the neutral participant (will be decided by the organizers)' + '' +
          'who will control the proceedings.' +
          'The ‘speaker’ of each team will get maximum 4 minutes to speak out their content either in favour or against the motion.',
          'The ‘negator’ of each team must write down some powerful points spoken by the ' +
          'rival ‘speaker’; and then negate those points when asked by the Moderator. ' +
          '‘Negator’ of each team will get maximum 2 minutes to negate opposition’s points.',
          'After the completion of Speakers’ and Negators’ points, the Moderator ' +
          'will pose one question to each team, which needs to be answered by the team in maximum 60 seconds.',
          'The ‘moderator’ cannot be questioned back in any case.',
          'Speakers will be rated based on content and communication skills out of 10. Negators will be rated based on their ' +
          'ability to negate the rivals point (out of 5) Answers to final question from moderator ' +
          'will be rated out of 5. So, top 2 teams getting best scores out of 20, will be rewarded.',
          'In case of any conflict, decision of jury/organisers will be considered final. Topics of debate will be ' +
          'announced two days prior the event at sabrang.jklu.edu.in and will be mailed to participants registered email id.'],
      startTime:
        '10-NOV-2019: 12:00 PM',
      endTime:
        '02:00 PM',
      fee:
        '250',
      prize:
        '2500. '
    },
    {
      id: '18',
      team: true,
      maxTeamMembers: 2,
      minTeamMembers: 2,
      name: 'MANAGEMENT QUIZ',
      smallImg: baseLoc + 'managementquiz1.jpg',
      // largeImg: baseLocLarge + '',
      category: 'm1',
      des:
        'A quiz event which deals with company histories, business strategies, ' +
        'well known deals, people in news, acquisitions and future business developments. ' +
        'Quality and type of questions depends on the quizmaster.',
      judgement:
        [],
      rules:
        ['1.	Open to all participants',
          '2.	Two members per team.' +
          '3.	Total no of questions: 25.',
          '4.	5 points for each question',
          '5.	5 team will be selected for finals based on score',
          '6.	Inbuilt tie breakers'],
      startTime:
        '09-NOV-2019: 12:00 PM',
      endTime:
        '02:00 PM',
      fee:
        '150',
      prize:
        '1500. '
    },
    {
      id: '19',
      team: true,
      maxTeamMembers: 2,
      minTeamMembers: 2,
      name:
        'ACCOUNTS MASTER',
      smallImg:
        baseLoc + 'accounts master1.jpg',
      // largeImg: baseLocLarge + 'accountmaster.jpg',
      category: 'm2',
      des:
        'Accounts master is the game designed to check the accounting skills of management student and their ability to prepare ' +
        'financial statements from the scratch of business transactions provided to them. ',
      judgement:
        ['Accuracy', 'Process', 'Compliance with GAAP', 'Format'],
      rules:
        ['There must be 2 participants in each group.',
          'Use of scientific calculator is prohibited.' +
          'Usage of non-scientific calculator is allowed.',
          'Usage of any electronic device is not acceptable.',
          'Time allotted will be 1.5 hours.',
          'Group providing accurate result with shortest time will be the winner.',
          'Expected prize money will be 8-10 times of registration fee or more.'],
      startTime:
        '09-NOV-2019: 01:00 PM',
      endTime:
        '03:00 PM',
      fee:
        '150',
      prize:
        '1500. '
    },
    {
      id: '20',
      team: true,
      maxTeamMembers: 5,
      minTeamMembers: 4,
      name: 'THINK A THON',
      smallImg: baseLoc + 'thinkAthon1.jpg',
      // largeImg: baseLocLarge + 'thinkathon.jpg',
      category: 'm3',
      des: 'This is an event for entrepreneurs, start-ups, innovators. ' +
        'We welcome creators with their ideas and passion to improve the world around us. ',
      judgement: [],
      rules: ['1.	There can be 4 to 5 members in a team.',
        '2.	Each team will get 60 seconds to pitch their ideas in 1st round.' +
        '3.	The selected teams will then get time of 6 minutes to present their full report in 2nd round to members and the jury.'],
      startTime: '09-NOV-2019: 10:00 AM',
      endTime: '06:00 PM',
      fee: '200',
      prize: '2000. '
    },

    {
      id: '21',
      team: true,
      maxTeamMembers: 5,
      minTeamMembers: 5,
      name: 'LAN Gaming - Counter Strike: Global Offensive ',
      smallImg: baseLoc + 'csgo.jpg',
      // largeImg: baseLocLarge + 'csgo.jpg',
      category: 'l0',
      des: 'Gather your team and and go Terrorist hunting, sneak in to plant a Bomb' +
        ', defend the Hostages or rescue them.' +
        ' Maps: de_mirage, de_inferno and de_dust2.',
      judgement: ['Team with highest points wins. '],
      rules: ['Each team must have 5 players and 1 stand-in player (optional) but cannot be an existing player in the tournament.',
        'Friendly fire will be on by default. ',
        'The players will be given 10 minutes to warmup and adjust and configure the sensitivity and ' +
        'other necessary settings in the game. ',
        'A knife round will be played to determine the side. The winner of this knife round will choose the side. ',
        'A casual match will be played by the teams and the first team to win 15 rounds will win. ',
        'If the server crashes, the server must be restarted, and the game will be continued with' +
        ' the same score. The start money given to all the players will be 2000 instead of 800. ',
        'If a player drops the server will be paused at the end of the current round. ',
        'In general, all scripts are illegal except for buy, toggle and demo scripts.',
      ],
      startTime: '09-NOV-2019: 12:00 PM',
      endTime: '06:00 PM',
      fee: '250',
      prize: '2100. '
    },

    {
      id: '22',
      team: false,
      maxTeamMembers: 0,
      minTeamMembers: 0,
      name: 'LAN Gaming - PUBG Mobile ',
      smallImg: baseLoc + 'pubg1.jpg',
      // largeImg: baseLocLarge + 'pubg1.jpg',
      category: 'l1',
      des: 'Stay Low, Go Fast. Kill First, Die Last' +
        'One Shot, One Kill. No Luck, All Skill.',
      judgement: ['Last one standing wins.'],
      rules: ['A custom room will be created, and the players will be invited by a code. ',
        'All the participants will play solo. ' +
        'Map to be played will be randomized. ',
        'Use of emulator is strictly prohibited. ',
        'Kindly carry power banks with you if possible and keep your device charged. ',
        'Use of gfx tool is allowed.',
        'Use of mobile gaming controller and trigger controllers are prohibited. ',
        'If you disconnect from the game, bad luck! ',
        'The last one standing will win. ',
        'The intentional use of any bug, glitches or error in the game is strictly prohibited. ',
        'All participants must obey the coordinator and follow the rules. '],
      startTime: '09-NOV-2019: 12:00 PM',
      endTime: '06:00 PM',
      fee: '100',
      prize: '1100. '
    },

    {
      id: '23',
      team: false,
      maxTeamMembers: 0,
      minTeamMembers: 0,
      name: 'LAN Gaming - BLUR',
      smallImg: baseLoc + 'blur1.jpg',
      // largeImg: baseLocLarge + 'blur1.jpg',
      category: 'l2',
      des: 'Race through the track dodging the attacks of your opponents while attacking them with power ups.' +
        'Make sure to hone your drifting skills.',
      judgement: ['Finishing Position'],
      rules: ['A total of six players will play the game at a time. The player that wins the match will advance to the next round. ',
        'The game will be of 3 laps. ' +
        'The damaged will be high. ',
        'Any class of cars can be selected by the participants. ',
        'All power-ups can be used. ',
        'Mods will be disabled by default. ',
        'Maps will be randomized. ',
        'One shot wreck will be disabled. '],
      startTime: '09-NOV-2019: 12:00 PM',
      endTime: '06:00 PM',
      fee: '100',
      prize: '1100. '
    },

    {
      id: '24',
      team: false,
      maxTeamMembers: 0,
      minTeamMembers: 0,
      name: 'FIFA 18',
      smallImg: baseLoc + 'fifa.jpg',
      // largeImg: baseLocLarge + 'fifa.jpg',
      category: 'l3',
      des: 'Enter and rule the world of Fifa with ' +
        'Power, skills and stamina',
      judgement: ['Win/Lose'],
      rules: ['The half time will be of 5 minutes. ',
        'The difficulty will be set to legendary. ' +
        'Camera settings will be set to tele broadcast. ',
        'In case of a draw there will be direct penalties. ',
        'Choosing Same teams are allowed. ',
        'Defending can be of your choice. ',
        'You can customize your own controls as per your need. ',
        'If you want to play with a controller, you should bring up your own. '],
      startTime: '09-NOV-2019: 12:00 PM',
      endTime: '06:00 PM',
      fee: '100',
      prize: '1100. '
    }
  ]
;
