export function updateProgressUI(
  progressBar: HTMLElement,
  progressText: HTMLElement,
  percentage: number
): void {
  progressBar.style.width = `${percentage}%`;
  progressText.textContent = `Downloading... ${Math.round(percentage)}%`;
}

export function showError(container: HTMLElement, message: string): void {
  container.innerHTML = `
    <div class="bg-red-500/20 p-4 rounded-lg">
      <p class="text-red-400">Error: ${message}</p>
    </div>
  `;
  container.classList.remove('hidden');
}

export function triggerDownload(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}