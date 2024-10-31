import util from "./terminalModuleCss";

export default function TerminalPrompt({ path, children }) {
  return (
    <div className={styles.index}>
      <span className={`text-white ${util.hideBelow600}`}>root@nova:</span>
      <span className={`text-white ${util.hideBelow600}`}>{path}$ </span>
      <span className="text-white">{children}</span>
    </div>
  );
}
