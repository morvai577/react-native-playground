# react-native-playground

## Project structure
[Following this structure](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af)

## Styling
Create and use stylesheets when possible, e.g.
```tsx
const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
  },
});
```
And then can use styles like this:
```tsx
<View style={styles.container}>
...
```

### Margin vs Padding
TODO

## Utilising TS

### Specifying types for props example
```tsx
interface ColouredBoxProps {
  colour: string;
  description: string;
}
```
Then pass the props like this:
```tsx
const ColouredBox = ({colour, description}: ColouredBoxProps) => {
  // Destructuring props example^
  ...
```
