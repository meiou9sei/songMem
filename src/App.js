function App() {
  return (
    <div className="App">
      <p>test</p>
    </div>
  );
}

export default App;

/* 
data we need to track: 
  -- songMem
    -- id (probably just the title of the song)
    -- lines array
    -- sections array
  -- lines
    -- id
    -- the string of lyric itself
    -- has a section it's assigned to
    -- a label (be it the first two words or a custom strong)
    -- display status (all, part, hidden)
  -- sections
    -- id
    -- a label (be it an emoji or a custom string)
    -- which line ids it contains
    -- memorized status (true or false)
    -- display status (none, all, part, hidden)

process: 
  -- view saved songMems, enter songMem, or enter new lyrics
  new lyrics:
    -- enter title (checks if title already exists)
    -- enter lyrics to field, lines separated by a newline, and submit*
      -- songMem object with array of line objects generated
    -- user can group them into sections
      -- sections added to songMem object as an array
      -- emoji generated for section
    
  enter songMem string:
  -- checks if title already exists
  -- parses through string, stores in local storage, displays on screen

  edit songMem lyric:
    -- change title
      -- checks if title already exists
    -- change display setting of line, or groups of lines by section
      -- first 2 words, custom string, or hide line entirely
    -- change custom label for line 
    -- change custom label for section
    -- change memorized status of sections

  sing mode:
    -- cards appear in sequence, one card on main display, can navigate through them w/ arrow keys or mouse clicks
      -- can change their memorized status too
    
  saving:
    -- status change of cards/lyrics is automatically stored 
    -- can delete songMems
    -- can load songMem


  * I don't think users should be able to edit lyrics?
    - lyrics don't change, and allowing them to edit it will cause a lot of hassle
    - need to restart by pasting new lyrics for now, maybe add edit option later 
*/

/* 
todo:
just making new songMem for now, no saving in storage or emoji generation yet
- new song: 
  -- create input w/ title and lyrics section
  -- have input parse through string, creates new songMem object, with lines array, places each string in lines.
    -- also have each line object generate their corresponding keys
  
- display songMem:
  -- have lines be groupable into sections (figure out how you wanna do that) 
  -- give label to line (which just has first 2 words automatically there)
  -- give label to section (can changes these by double clicking btw, and clicking off - and an edit button next to it ig? for UI clarity)
  -- can change display setting of line
  -- can change display setting of groups of line through section

- singMode:
  -- displays cards of sections in order, with the current/previous/next one (total 3 cards) on screen
  -- cards' lines retain their display settings
  -- can change memorized status
  -- can change card with arrow keys (up/left and down/right) or click



*/