export default function HelloComponent() {
  return (
    <div>
        <h1>
            React Hello
        </h1>

        <button onClick={
            alert('Hola')
        }>
            Click here
        </button>
    </div>
  )
}
