var dinamicLabel;
const gtmTrackElements = document.querySelectorAll('[data-gtm-tracker]');

function gtmTrackEvents (event, category, action, label) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: `${event}`,
      category: `${category}`,
      action: `${action}`,
      label: `${label}`,
    });
    console.log(dataLayer);
  };

function triggerSnippetByEvent() {
    gtmTrackElements.forEach(item => {
        const eventToListener = item.dataset.gtmTracker;
        dinamicLabel = item.href;
        item.addEventListener(eventToListener, 
            gtmTrackEvents('event','category','action',dinamicLabel)
        );
        
    });
}

triggerSnippetByEvent();

