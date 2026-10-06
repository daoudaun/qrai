// Dans l'application Android KnowMi : pas de tarifs ni de lien d'achat (règles Google Play sur les paiements).
(function () {
  if (!/KnowMiApp\//.test(navigator.userAgent) && typeof window.KNOWMI_APP !== "string") return;
  var css = document.createElement("style");
  css.textContent = 'a[href*="#tarifs"],#tarifs,.plan,a[href*="formule="]{display:none!important}';
  document.head.appendChild(css);
})();
