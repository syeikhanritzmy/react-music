import IonIcon from '@reacticons/ionicons';
function Search() {
  return (
    <div className="search-bar">
      <IonIcon name="search" className="ion-icon" />
      <input type="text" placeholder="Seach music,artis,albums.." />
    </div>
  )
}

export default Search