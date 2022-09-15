import { StyledNewSongInput } from "./styles/NewSongInput.styled";

const NewSongInput = () => {
    return (
        <StyledNewSongInput >
            <label htmlFor="songTitle">Title:</label>
            <input type="text" name="songTitle" id="songTitle" />
            <label htmlFor="songLyrics">Lyrics:</label>
            <textarea name="songLyrics" id="songLyrics" placeholder="Enter your Song lyrics here. Separate each line by line." />
        </StyledNewSongInput>
    );
}
 
export default NewSongInput;