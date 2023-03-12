import "./form.css";

function SearchPlayer() {
  return (
    <form>
      <h1 class="title">Search Player</h1>
      <label>
        Search by :
        <select>
          <option value="email">Email</option>
          <option value="username">Username</option>
          <option value="experience">Experience</option>
          <option value="level">Level</option>
        </select>
      </label>
      <button type="submit" className="submit-button">
        Search
      </button>
    </form>
  );
}

export default SearchPlayer;
