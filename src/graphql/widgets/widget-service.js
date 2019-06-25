import { v4 as keygen } from 'uuid';

function WidgetService({ dynamodb }) {
  async function getWidget({ widgetId, widgetTableName }) {}

  async function saveWidget({ widget, widgetTableName }) {}

  return Object.freeze({
    getWidget,
    saveWidget
  });
}

export default WidgetService;
