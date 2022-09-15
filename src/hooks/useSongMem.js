const useSongMem = (songMem) => {


    
    //format lyrics into a songMem
    /*
    e.g. 
    {
        id: 'Blood by ANIMA',
        lines: [
            { 
                id: 1,
                line: 'The more I run the farther away it seems',
                section: 🌮,
                hint: 'The more I'
                displayStatus: all
            },
            { 
                id: 2,
                line: 'What is green is always more than a yard away',
                section: 🌮,
                hint: 'What is green'
                displayStatus: all
            },
            {line 3}, {line 4}, {line 5}, {line 6},
            { 
                id: 7,
                line: 'To create, complicate, it's the same damn thing',
                section: 🎨,
                hint: 'To create, complicate,'
                displayStatus: part
            },
            { 
                id: 8,
                line: 'Once it's made, I'm too good to appreciate',
                section: 🎨,
                hint: 'Once it's made,'
                displayStatus: hidden
            },
            {rest of the songs lines},
        ],
        sections: {
            {
                id: 1,
                label: 🌮,
                lines: '1-4',
                memorized: true;
                displayLabel: false;
            },
            {
                id: 2,
                label: 🎨,
                lines: '5-8',
                memorized: false;
                displayLabel: true;
            },
        }
    }
    */
    const formatSongMem = (songMem) {
        //I think this should probably be a separate hook? or just in the logic
        //of NewSongInput.js, which formats the lyrics and sends it off to useSongMem.js
    }

    /*
    I think this should prob just deal w/ edit mode, sing mode, and maybe in saving?
    */ 

}

export default useSongMem