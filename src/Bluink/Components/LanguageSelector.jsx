import { LANGUAGE_VERSIONS } from "../constants";
import "./LanguageSelector.css"; // Import the CSS file

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <div className="language-selector">
      <select
        className="language-dropdown"
        value={language}
        onChange={(e) => onSelect(e.target.value)}
      >
        {languages.map(([lang]) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
      <label className="language-label">CODE HERE:</label>
    </div>
  );
};

export default LanguageSelector;
