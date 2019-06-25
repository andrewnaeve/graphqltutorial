import WidgetService from './widget-service';

const widgetResolvers = ({ dynamodb }) => {
  const service = WidgetService({ dynamodb });
  return {
    Query: {
      getWidget: (_, { widget_id: widgetId }, context) =>
        service.getWidget({ widgetId, ...context })
    },
    Mutation: {
      saveWidget: (_, { widget }, context) =>
        service.saveWidget({ widget, ...context })
    }
  };
};

export default widgetResolvers;
