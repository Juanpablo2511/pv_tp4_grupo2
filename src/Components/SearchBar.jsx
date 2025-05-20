export default function SearchBar({ search, setSearch }) {
    return (
      <input
        type="text"
        placeholder="Buscar por descripción o ID"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />
    )
  }