export default function Avatar({ image, isNew }) {
  return (
    <div className='avatar'>
      <img className='profileImage' src={image} alt='avatar' />
      {isNew ? <span className='newTag'>new</span> : null}
    </div>
  );
}
