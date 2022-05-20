type Props = {
  isHardMode: boolean,
}

const styles = {
  fontSize: '18px',
}

const classes = "flex justify-center mb-4 dark:text-white"

export const HardModeText = ({ isHardMode }: Props) => {
  const hardModeText = isHardMode ? "on" : "off"
  return (
    <div style={styles} className={classes}>
      <p>Hard Mode is <strong>{hardModeText}</strong></p>
    </div>
  )
}
