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
      name: 'Event Name',
      smallImg: baseLoc + 'SKACKITECTURE1.jpg',
      // largeImg: baseLocLarge + 'stackitecture1.jpg',
      category: 'd0',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
      rules: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg: baseLoc + 'facemaskchallenge1.jpg',
      // largeImg: baseLocLarge + 'facemaskchaleenge.jpg',
      category: 'd1',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
      rules: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg: baseLoc + 'ClickOgraphy1.jpg',
      // largeImg: baseLocLarge + 'clickOgraphy.jpg',
      category: 'd2',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      rules: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
      judgement: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg: baseLoc + 'dj war1.jpg',
      // largeImg: baseLocLarge + 'djwar.jpg',
      category: 'c0',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
      rules: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg: baseLoc + 'page2stage1.jpg',
      // largeImg: baseLocLarge + 'page2stage.jpg',
      category: 'c1',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
      rules: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg: baseLoc + 'bandjam1.jpg',
      // largeImg: baseLocLarge + 'bandjam.jpg',
      category: 'c2',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
      rules:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg: baseLoc + 'treasurehunt1.jpg',
      // largeImg: baseLocLarge + 'scavengershunt.jpg',
      category: 'c3',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
      rules:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg:
        baseLoc + 'talentX1.jpg',
      // largeImg: baseLocLarge + 'talentX.jpg',
      category: 'c4',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
      rules:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg:
        baseLoc + 'vogue-gala1.jpg',
      // largeImg: baseLocLarge + 'voguegala1.jpg',
      category: 'c5',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
      rules:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg:
        baseLoc + 'bnsSolo.jpg',
      // largeImg:baseLocLarge + 'bnsSolo.jpg',
      category:
        'c6',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
      rules:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg:
        baseLoc + 'bnsgroup.jpg',
      // largeImg:baseLocLarge + 'bnsgroup.jpg',
      category:
        'c7',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
      rules:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg: baseLoc + 'bdc.jpg',
      // largeImg: baseLocLarge + 'bdc.jpg',
      category: 'c8',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
      rules: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg: baseLoc + 'beatbox.jpg',
      // largeImg: baseLocLarge + 'beatboxing.jpg',
      category: 'c9',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
      rules: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg: baseLoc + 'singingpalooza1.jpg',
      // largeImg: baseLocLarge + 'beatboxing.jpg',
      category: 'c10',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
      rules: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg:
        baseLoc + 'autocad1.jpg',
      // largeImg: baseLocLarge + 'autocad.jpg',
      category: 't0',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
      rules:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg:
        baseLoc + 'codextreme1.jpg',
      // largeImg: baseLocLarge + 'codextreme.jpg',
      category: 't1',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
      rules:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg:
        baseLoc + 'robosoccer1.jpg',
      category: 't2',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
      rules:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg:
        baseLoc + 'logicians1.jpg',
      // largeImg: baseLocLarge + 'logicians.jpg',
      category: 'm0',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
      rules:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg: baseLoc + 'managementquiz1.jpg',
      // largeImg: baseLocLarge + '',
      category: 'm1',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
      rules:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg:
        baseLoc + 'accounts master1.jpg',
      // largeImg: baseLocLarge + 'accountmaster.jpg',
      category: 'm2',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
      rules:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
          'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg: baseLoc + 'thinkAthon1.jpg',
      // largeImg: baseLocLarge + 'thinkathon.jpg',
      category: 'm3',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
      rules: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg: baseLoc + 'csgo.jpg',
      // largeImg: baseLocLarge + 'csgo.jpg',
      category: 'l0',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
      rules: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg: baseLoc + 'pubg1.jpg',
      // largeImg: baseLocLarge + 'pubg1.jpg',
      category: 'l1',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
      rules: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg: baseLoc + 'blur1.jpg',
      // largeImg: baseLocLarge + 'blur1.jpg',
      category: 'l2',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
      rules: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
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
      name: 'Event Name',
      smallImg: baseLoc + 'fifa.jpg',
      // largeImg: baseLocLarge + 'fifa.jpg',
      category: 'l3',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat.',
      judgement: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
      rules: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        'nisi ut aliquip ex ea commodo consequat.'],
      startTime: '09-NOV-2019: 12:00 PM',
      endTime: '06:00 PM',
      fee: '100',
      prize: '1100. '
    }
  ]
;
