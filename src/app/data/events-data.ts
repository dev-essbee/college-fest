import {Event} from '../event';
// todo fix categories
export let categories = [{id: 'cse-0', value: 'CSE'}];
const baseLoc = '../../assets/img/events/640p/';
const baseLocLarge = '../../assets/img/events/1080p/';
export let events: Event[] = [
  {
    id: '0',
    name: 'STACKITECTURE',
    smallImg: baseLoc + 'SKACKITECTURE1.jpg',
    largeImg: baseLocLarge + 'stackitecture1.jpg',
    category: 'civil',
    des: 'Show your creativity with stacks. Pile up the wooden pieces in a ' +
      'creative and stable form using your mind and some techniques without any gum/thread. ',
    judgement: ['Stability', 'Height', 'Looks / aesthetics', 'Interesting / creative', 'Challenging '],
    rules: ['There will be only 1 participant as it is an individual event.',
      'Participants will be provided by 100 pieces of wood. ' +
      'Participant must create a tower or building with those pieces making it stable and attractive. ',
      'Usage of string or glue or any other material is now allowed. ',
      'Time allotted will be 1 hour. '],
    startTime: '12:12',
    endTime: '18:18',
    fee: '150',
    prize: 'Expected prize money will be 8-10 times of registration fee. '

  },
  {
    id: '1',
    name: 'FACE MASK CHALLENGE',
    smallImg: baseLoc + 'facemaskchallenge1.jpg',
    largeImg: baseLocLarge + 'facemaskchaleenge.jpg',
    category: 'civil',
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
    startTime: '12:12',
    endTime: '18:18',
    fee: '150',
    prize: 'Expected prize money will be 8-10 times of registration fee. '
  },
  {
    id: '2',
    name: 'CLICK-O-GRAPHY',
    smallImg: baseLoc + 'ClickOgraphy1.jpg',
    largeImg: baseLocLarge + 'clickOgraphy.jpg',
    category: 'civil',
    des: '“Taking an image, freezing a moment, reveals how rich reality truly is. ”' +
      'SABRANG 2K19 invites you to capture and freeze the moment in Click-O-Graphy: Photography challenge.' +
      'themes: Architecture, Leading lines, Nature and landscape, Emotions, Social environments, ' +
      'Objects in frames, Human wildness',
    rules: ['Photographer can choose any five themes out of the mentioned themes.',
      'Photo must be clicked within the campus boundary. ' +
      'Competition will be started from the first day of Sabrang. ',
      'Photographer must click their between the shoot. ',
      'Photographer can make all basic adjustment like exposure, contrast. ',
      'Photographer can click photos from mobile or any professional camera. ',
      'Themes and regulations should be strictly followed otherwise entry will be discarded'],
    judgement: [],
    startTime: '12:12',
    endTime: '18:18',
    fee: '150',
    prize: 'Expected prize money will be 8-10 times of registration fee. '
  },
  {
    id: '3',
    name: 'DJ WAR ',
    smallImg: baseLoc + 'dj war1.jpg',
    largeImg: baseLocLarge + 'djwar.jpg',
    category: 'civil',
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
    startTime: '12:12',
    endTime: '18:18',
    fee: '1000',
    prize: 'Expected prize money will be 8-10 times of registration fee. '
  },
  {
    id: '4',
    name: 'PAGE TO STAGE (Skit)',
    smallImg: baseLoc + 'page2stage1.jpg',
    largeImg: baseLocLarge + 'page2stage.jpg',
    category: 'civil',
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
      '12:12',
    endTime:
      '18:18',
    fee:
      '350',
    prize:
      'Expected prize money will be 8-10 times of registration fee. ',

  },
  {
    id: '5',
    name: 'ROCK - O - PHONIX (BAND JAM)',
    smallImg: baseLoc + 'bandjam1.jpg',
    largeImg: baseLocLarge + 'bandjam.jpg',
    category: 'civil',
    des: 'Get ready to sway your hands and bang your head to energizing and rocking beats of Rocko-O-Phonix. ',
    judgement: ['Planning/preparedness', 'Originality',
      'Interface with audience', 'Quality of performance', 'Presentation'],
    rules:
      ['Participants must report 45 minutes before the competition. ',
        'Each Participant will get 5 minutes for their instrumental setup. ' +
        'Each Participant will get 20 minutes for their performance. ',
        'The decision of the judges will be final, and no one shall question it. ',
        'All participants must bring their own instruments and drum is optional (we shall provide in case teams decide not to bring). ',
        'Drum Kit will be provided with basic cymbal set i.e. Hi Hats, Crash, Ride. ' +
        'Apart from this if any participant wishes to use any other cymbal then he should bring his own cymbal with proper boom stand. '],
    startTime:
      '12:12',
    endTime:
      '18:18',
    fee:
      '1200',
    prize:
      'Expected prize money will be 8-10 times of registration fee. '
  },
  {
    id: '6',
    name: 'SCAVENGERS HUNT (TREASURE HUNT)',
    smallImg: baseLoc + 'treasurehunt1.jpg',
    largeImg: baseLocLarge + 'scavengershunt.jpg',
    category: 'civil',
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
      '12:12',
    endTime:
      '18:18',
    fee:
      '250',
    prize:
      'Expected prize money will be 8-10 times of registration fee. '
  }, {
    id: '7',
    name:
      'TALENTX',
    smallImg:
      baseLoc + 'talentX1.jpg',
    largeImg: baseLocLarge + 'talentX.jpg',
    category: 'civil',
    des:
      'Talent is defined as someone who has a natural ability to be good at something, especially without being taught. ' +
      'A Talent show is an event where participants perform talents across Poetry, ' +
      'Whistle mania, Stand-up comedy. Get ready to showcase your talent this SABARNG 2K19 and win exciting prizes.',
    judgement:
      ['Content', 'Fluency', 'Spontaneity', 'Presentation', 'Sense of humor'],
    rules:
      ['Any kind of non-acceptable content would be disqualified. ',
        'Time limit is 4-5 minutes. ',
        'Negative marking for exceeding time limit. ',
        'Participants can show their performance in any way they want but it should be decent. ',
        'Participants may perform only one time during the show. ' +
        'Any participant who participates in more than one performance will be disqualified from both the acts. ',
        'The decision of the judges would be considered final. '],
    startTime:
      '12:12',
    endTime:
      '18:18',
    fee:
      '150',
    prize:
      'Expected prize money will be 8-10 times of registration fee. '
  },
  {
    id: '8',
    name:
      'VOGUE GALA - THE FASHION SHOW',
    smallImg:
      baseLoc + 'vogue-gala1.jpg',
    largeImg: baseLocLarge + 'voguegala1.jpg',
    category: 'civil',
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
        'All teams will have an on-campus elimination round. ' +
        'Time limit 12 minutes (curtain to curtain). Points will be deducted for exceeding the time limit. ',
        'One of the team members can explain their views of dressing to judges. ',
        'Emphasis will be given to apparels, portrayals and originality. ',
        'Backstage helpers should not exceed. ',
        'Two members must be present to provide cues for musical night. ',
        'The lightning of candles, matches or cigarettes will not be allowed on stage and violation will result in disqualification. ',
        'A T-shaped extension will be provided to the stage. Both the stage and the extension may be used as the \'walking - ramp\'. ',
        'Teams are requested to confirm their participation in advance by emailing to the coordinator\'s. ',
        'Teams must report to the department of theatre room immediately after the registration at the control booth. ',
        'Teams must bring a pen drive containing their soundtrack. The soundtrack should be in MP3 format. ',
        'The participants must report at least 1.5 hours before the event is scheduled.'],
    startTime:
      '12:12',
    endTime:
      '18:18',
    fee:
      '800',
    prize:
      'Expected prize money will be 8-10 times of registration fee. '
  },
  {
    id: '9',
    name:
      'AUTOCAD',
    smallImg:
      baseLoc + 'autocad1.jpg',
    largeImg: baseLocLarge + 'autocad.jpg',
    category: 'civil',
    des:
      'This event allows the participants to display their ' +
      'very best technical drawings.this category is for 2D CAD drawings.' +
      'This is a display of the students’ ability to create technical drawings, not their design ability. ',
    judgement:
      ['Completeness', 'Accuracy', 'Time Stamp', 'Dimensioning'],
    rules:
      ['Time provided will be 1.5 hours. ',
        'Limited one entry per student. ' +
        'A complete drawing is required otherwise the participant will be disqualified. ',
        'If nobody can complete the drawing than participant will be judged on the criteria specified above '],
    startTime:
      '12:12',
    endTime:
      '18:18',
    fee:
      '150',
    prize:
      'Expected prize money will be 8-10 times of registration fee. '
  }, {
    id: '10',
    name:
      'CODEXTREME',
    smallImg:
      baseLoc + 'codextreme1.jpg',
    largeImg: baseLocLarge + 'codextreme.jpg',
    category: 'civil',
    des:
      'This event is based on time, complexity, algorithm designing and executing code in ' +
      'which participants are required to solve the given problem set, generating output and debug the code.' +
      'Teams are required to solve the real life problems through coding. Programming skills of participants would be tested.',
    judgement:
      ['Scoring: The exact marking scheme will be disclosed later. ' +
      'In case of a tie, the teams will compete for a rapid-fire Round and the winner will be decided based on marks obtained.'],
    rules:
      ['The organisers reserve the rights to change any or all of the above rules as they deem fit. ' +
      'Change in rules, if any, will be highlighted on the website and notified to the registered teams.',
        'Note that at any point of time, the latest information will be that which is on the site. ' +
        'The information provided in the pdf downloaded earlier may not be the latest. ' +
        'However, registered participants will be informed through mail about any such changes.' +
        'Participants need not to bring their own laptops during the competition.',
        'Usage of string or glue or any other material is now allowed. ',
        'Time allotted will be 3 hour. ',
        'All students with a valid identity card of their respective educational institutes are eligible to participate in the event. '],
    startTime:
      '12:12',
    endTime:
      '18:18',
    fee:
      '150',
    prize:
      'Expected prize money will be 8-10 times of registration fee. '
  },
  {
    id: '11',
    name:
      'Robo-Soccer',
    smallImg:
      baseLoc + 'robosoccer1.jpg',
    largeImg: baseLocLarge + 'robosoccer.jpg',
    category: 'civil',
    des:
      'For all those who have passion for Robotics as well as Sports, Sabrang’19 presents Robo-soccer. ' +
      'This competition is to show how tactile and robust your robot is in soccer by competing and scoring more goals.',
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
        'In case the robot of Team A gets stuck to the robot of Team B during the match then all ' +
        'the robots will be replaced to the starting position. Violation of any of the above rules will lead to disqualification.',
        'Dimensions of the robot should not exceed 30cm x 30cm x 30cm.(lxbxh). ',
        'Weight of the robot should not exceed 5 kg. ',
        'Any mechanism of the robot should not damage the arena. ',
        'Any mechanism should not be used to harm the opponent’s robots. ',
        'The maximum voltage in the circuit should not exceed 12 Volt DC at any time. ',
        'To avoid noise between wireless communication during the event, the team can use remote of 2.4GHz. (optional). ',
        'Only up to 5% tolerance will be allowed else the bot will be unfit for the game and will lead to disqualification. '],
    startTime:
      '12:12',
    endTime:
      '18:18',
    fee:
      '150',
    prize:
      'Expected prize money will be 8-10 times of registration fee. '
  },
  {
    id: '12',
    name:
      'THE LOGICIANS',
    smallImg:
      baseLoc + 'logicians1.jpg',
    largeImg: baseLocLarge + 'logicians.jpg',
    category: 'civil',
    des:
      'How logically you debate? Well, if you are an engaging and logical debater, ' +
      'then “The Logicians” provides you a platform to impress, convince, and win the rebuttal. ' +
      'The stage is yours; speak, evolve, convince, negate, and be the best ‘Logician’.',
    judgement:
      ['Clarity', 'Use of argument', 'Use of cross-examination and rebuttal', 'Presentation style'],
    rules:
      ['Number of ‘Logicians’ in each team must be 2 (two) – one be the Speaker, and the other be Negator.',
        'There will be a Debate Moderator – the neutral participant (will be decided by the organizers) who will control the proceedings.' +
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
      '12:12',
    endTime:
      '18:18',
    fee:
      '250',
    prize:
      'Expected prize money will be 8-10 times of registration fee. '
  },
  {
    id: '13',
    name: 'MANAGEMENT QUIZ',
    smallImg: baseLoc + 'managementquiz1.jpg',
    largeImg: baseLocLarge + '',
    category: 'civil',
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
      '12:12',
    endTime:
      '18:18',
    fee:
      '150',
    prize:
      'Expected prize money will be 8-10 times of registration fee. '
  },
  {
    id: '14',
    name:
      'ACCOUNTS MASTER',
    smallImg:
      baseLoc + 'accounts master1.jpg',
    largeImg: baseLocLarge + 'accountmaster.jpg',
    category: 'civil',
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
      '12:12',
    endTime:
      '18:18',
    fee:
      '150',
    prize:
      'Expected prize money will be 8-10 times of registration fee. '
  },
  {
    id: '15',
    name:
      'THINK A THON',
    smallImg:
      baseLoc + 'thinkAthon1.jpg',
    largeImg: baseLocLarge + 'thinkathon.jpg',
    category: 'civil',
    des:
      'This is an event for entrepreneurs, start-ups, innovators. ' +
      'We welcome creators with their ideas and passion to improve the world around us. ',
    judgement:
      [],
    rules:
      ['1.	There can be 4 to 5 members in a team.',
        '2.	Each team will get 60 seconds to pitch their ideas in 1st round.' +
        '3.	The selected teams will then get time of 6 minutes to present their full report in 2nd round to members and the jury.'],
    startTime:
      '12:12',
    endTime:
      '18:18',
    fee:
      '200',
    prize:
      'Expected prize money will be 8-10 times of registration fee. '
  }
];
