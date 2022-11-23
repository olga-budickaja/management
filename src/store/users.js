export const usersModule = {
    state: () => ({
        users: [
            {
                id: 'KJGSREJGAB',
                surname: 'Adler',
                firstname: 'Tim',
                date: '21.10.2022',
                time: '16:58',
                username: 'adler',
            },
            {
                id: 'RJBGTBST',
                surname: 'Bader',
                firstname: 'Karl',
                date: '18.10.2022',
                time: '13:16',
                username: 'bader',
            },
            {
                id: 'HDSHGGESN/LK',
                surname: 'Doser',
                firstname: 'Nadja',
                date: '16.10.2022',
                time: '10:23',
                username: 'doser',
            },
            {
                id: 'FKNGZKNFKN',
                surname: 'Eder',
                firstname: 'Klaus',
                date: '23.10.2022',
                time: '15:45',
                username: 'eder',
            },
        ],
        applications: [
            {
                id: 'VJBJBRKVB',
                app: 'KJGSREJGAB',
                name: '.CARD',
            },
            {
                id: 'HTHTJJY',
                app: 'KJGSREJGAB',
                name: '.EXTERNAL',
            },
            {
                id: 'JAWHRAGH',
                app: 'RJBGTBST',
                name: '.CARD',
            },
            {
                id: 'FD.KNDFK',
                app: 'RJBGTBST',
                name: '#DigitaldentityManagement',
            },
            {
                id: 'BJLDGSBGL',
                app: 'HDSHGGESN/LK',
                name: '.VISIT',
            },
            {
                id: 'JBGJSGGB.',
                app: 'FKNGZKNFKN',
                name: '.ACCESS',
            },
            {
                id: 'JBZGSJBFJZ',
                app: 'FKNGZKNFKN',
                name: '#DigitaldentityManagement',
            },
            {
                id: 'GSGHTHNHMIL',
                app: 'FKNGZKNFKN',
                name: '.EXTERNAL',
            },
        ],
        roles: [
            {id: 'NLKGNZFKN', rol: 'VJBJBRKVB', name: 'Card Management'},
            {id: 'KNTHNLSK', rol: 'KJGSREJGAB', name: 'Onboard Manager'},
            {id: 'ZKLGRZK', rol: 'JAWHRAGH', name: 'Card Management'},
            {id: 'G/GERHHI', rol: 'RJBGTBST', name: 'DIM Manager'},
            {id: 'BJJGBD', rol: 'BJLDGSBGL', name: 'Facility Management'},
            {id: 'HJJRYJDRY', rol: 'JBGJSGGB.', name: 'Access Manager'},
            {id: 'HDJHDJKJJNHBFD', rol: 'JBZGSJBFJZ', name: 'DIM Manager'},
            {id: 'DHGHYMK.L', rol: 'GSGHTHNHMIL', name: 'External Manager'},
        ]
    })
}