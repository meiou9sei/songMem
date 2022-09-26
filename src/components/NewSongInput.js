import { useState } from "react";
import { StyledNewSongInput } from "./styles/NewSongInput.styled";



const NewSongInput = ({childToParent}) => {
    const [songTitle, setSongTitle] = useState('');
    const [songWriter, setSongWriter] = useState('');
    const [songLyrics, setSongLyrics] = useState('');
    const [songMem, setSongMem] = useState('songMemPrioString');
    const handleSubmit = event => {
        event.preventDefault();

        //access input values
        console.log('song Title is', songTitle);
        console.log('song Writer is', songWriter);
        console.log('song Lyrics are', songLyrics);

        formatSong(songTitle, songWriter, songLyrics);

        //clear input values
        setSongTitle('');
        setSongWriter('');
        setSongLyrics('');
    }

    const formatSong = (songTitle, songWriter, songLyrics) => {
        setSongMem('The song title is ' + songTitle + ' by ' + songWriter + ' and the lyrics are ' + songLyrics + '.'); //bunch of code here to format it
        
        let numberOfLineBreaks = (songLyrics.match(/\n/g)).length;
        
        console.log('number of line breaks is ' + numberOfLineBreaks)

        const tempSongMemObject = {
            id: songTitle + ' by ' + songWriter,
            lines: [],
            sections: null,
        }

        const songLyricsArray = songLyrics.split(/\n/g)

        //add lines to object
        for (let i = 1; i < numberOfLineBreaks + 1; i++) {
            tempSongMemObject.lines.push({
                id: numberOfLineBreaks,
                line: songLyricsArray.shift(),
                section: null,
                hint: null,
                displayStatus: null
            });
        }
        console.log(tempSongMemObject);
    }

    return (
        <StyledNewSongInput onSubmit={handleSubmit} >
            <label htmlFor="songTitle">Title:</label>
            <input
                required
                type="text" 
                name="songTitle" 
                id="songTitle" 
                onChange={e => setSongTitle(e.target.value)}
                value={songTitle} 
            />
            <label htmlFor="songWriter">Songwriter:</label>
            <input
                required
                type="text" 
                name="songWriter" 
                id="songWriter" 
                onChange={e => setSongWriter(e.target.value)}
                value={songWriter} 
            />
            <label htmlFor="songLyrics">Lyrics:</label>
            <textarea
                required
                name="songLyrics" 
                id="songLyrics" 
                placeholder="Enter your Song lyrics here. Separate each line by line." 
                onChange={e => setSongLyrics(e.target.value)}
                value={songLyrics}
            />
            <input 
                type="submit" 
                value="Generate New SongMem" 
                onClick={() => childToParent(songMem)}
            />
        </StyledNewSongInput>
    );
}
 
export default NewSongInput;