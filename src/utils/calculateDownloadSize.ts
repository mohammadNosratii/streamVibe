export default function calculateDownloadSize(mb: number) {
  if (mb < 1000) {
    return `${mb} MB`;
  } else {
    const gb = mb / 1024;
    return `${gb.toFixed(1)} GB`;
  }
}
