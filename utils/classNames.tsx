export default function classNames(
  ...classes: (
    | string
    | boolean
    | null
    | ((params: { active: any }) => string)
  )[]
) {
  return classes.filter(Boolean).join(" ");
}
