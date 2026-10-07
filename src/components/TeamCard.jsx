export default function TeamCard({ name, role, bio }) {
  const initials = name.split(' ').map((w) => w[0]).join('').slice(0, 2);
  return (
    <article className="card team-card">
      <div className="avatar">{initials}</div>
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p className="muted">{bio}</p>
    </article>
  );
}
