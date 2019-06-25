import WidgetService from './widget-service';

const widgetResolvers = ({ dynamodb }) => {
  const service = WidgetService({ dynamodb });
  return {};
};

export default widgetResolvers;
