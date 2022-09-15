import { StyledNewSongInput } from "./styles/NewSongInput.styled";

const NewSongInput = () => {
    return (
        <StyledNewSongInput >
            <label htmlFor="newlyrics">Input Lyrics:</label>
            <textarea type="text" id="newlyrics" placeholder="Enter your Song lyrics here. Separate each line by line." />
        </StyledNewSongInput>
    );
}
 
export default NewSongInput;