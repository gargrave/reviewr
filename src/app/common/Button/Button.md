```jsx
const { ButtonColor } = require('./Button')

const style = { marginBottom: 4 }

;<React.Fragment>
  <div style={style}>
    <Button color={ButtonColor.Primary}>Primary</Button>
  </div>
  <div style={style}>
    <Button color={ButtonColor.Secondary}>Secondary</Button>
  </div>
  <div style={style}>
    <Button color={ButtonColor.Success}>Success</Button>
  </div>
  <div style={style}>
    <Button color={ButtonColor.Info}>Info</Button>
  </div>
  <div style={style}>
    <Button color={ButtonColor.Warning}>Warning</Button>
  </div>
  <div style={style}>
    <Button color={ButtonColor.Danger}>Danger</Button>
  </div>
  <div style={style}>
    <Button color={ButtonColor.Link}>Link</Button>
  </div>
</React.Fragment>
```
