import { useState } from "react";
import { StyledNewSongInput } from "./styles/NewSongInput.styled";



const NewSongInput = ({childToParent}) => {
    const [songTitle, setSongTitle] = useState('');
    const [songLyrics, setSongLyrics] = useState('');
    const [songMem, setSongMem] = useState('songMemPrioString');
    const handleSubmit = event => {
        console.log('test handlesubmit ran');
        event.preventDefault();

        //access input values
        console.log('song Title is', songTitle);
        console.log('song Lyrics are', songLyrics);

        formatSong(songTitle, songLyrics);

        //clear input values
        setSongTitle('');
        setSongLyrics('');
    }
    const formatSong = (songTitle, songLyrics) => {
        setSongMem('The song title is ' + songTitle + ' and the lyrics are ' + songLyrics + '.'); //bunch of code here to format it
    }
    return (
        <StyledNewSongInput onSubmit={handleSubmit} >
            <label htmlFor="songTitle">Title:</label>
            <input type="text" name="songTitle" id="songTitle" onChange={event => setSongTitle(event.target.value)} value={songTitle} />
            <label htmlFor="songLyrics">Lyrics:</label>
            <textarea name="songLyrics" id="songLyrics" placeholder="Enter your Song lyrics here. Separate each line by line." onChange={event => setSongLyrics(event.target.value)} value={songLyrics} />
            <input type="submit" value="Generate New SongMem" />
            <button onClick={() => childToParent(songMem)}>send songmem up</button>
        </StyledNewSongInput>
    );
}
 
export default NewSongInput;