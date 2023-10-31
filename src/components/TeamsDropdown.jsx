function TeamsDropdown() {
  return (
    <div className="teams-dropdown">
      <a href="/board">
        <div className="teams-dropdown-item">Board Members</div>
      </a>
      <a href="/advisors">
        <div className="teams-dropdown-item">Advisors/Mentors</div>
      </a>
      <a href="/executives">
        <div className="teams-dropdown-item">Executives</div>
      </a>
      <a href="/staff">
        <div className="teams-dropdown-item">Staff</div>
      </a>
      <a href="/placements">
        <div className="teams-dropdown-item">Placements</div>
      </a>
      <a href="/groups">
        <div className="teams-dropdown-item">Groups</div>
      </a>
    </div>
  );
}

export default TeamsDropdown;
