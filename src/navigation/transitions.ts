import { DEVICE_RESOLUTION } from '../themes/dimensions'

export const SlideToTopTransition = (index, position) => {
  const inputRange = [index - 1, index, index + 0.99, index + 1]

  const translateY = position.interpolate({
    inputRange,
    outputRange: [DEVICE_RESOLUTION.height, 0, 0, 0],
  })

  return { transform: [{ translateY }] }
}

export const SlideToRightTransition = (index, position) => {
  const inputRange = [index - 1, index, index + 0.99, index + 1]

  const translateX = position.interpolate({
    inputRange,
    outputRange: [-DEVICE_RESOLUTION.width, 0, 0, 0],
  })

  return { transform: [{ translateX }] }
}

export const SlideToLeftTransition = (index, position) => {
  console.log(index)
  const inputRange = [index - 1, index, index + 0.99, index + 1]

  const translateX = position.interpolate({
    inputRange,
    outputRange: [DEVICE_RESOLUTION.width, 0, 0, 0],
  })

  return { transform: [{ translateX }] }
}

export const ModalTransition = (index, position) => {
  const inputRange = [index - 1, index, index + 0.99, index + 1]

  const translateX = 0
  const translateY = position.interpolate({
    inputRange,
    outputRange: [50, 0, 0, 0],
  })

  return {
    transform: [{ translateX }, { translateY }],
  }
}

export const FadeTransition = (index, position) => {
  const inputRange = [index - 1, index, index + 0.99, index + 1]

  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1, 0],
  })

  return { opacity }
}

export const TransitionConfiguration = () => {
  return {
    // Define scene interpolation, eq. custom transition
    screenInterpolator: sceneProps => {
      const { position, scene } = sceneProps
      const { index, route } = scene
      const params = route.params || {}
      const transition = params.transition || 'default'

      return {
        slideToTop: SlideToTopTransition(index, position),
        slideToRight: SlideToRightTransition(index, position),
        slideToLeft: SlideToLeftTransition(index, position),
        modalTransition: ModalTransition(index, position),
        fadeTransition: FadeTransition(index, position),
        default: SlideToTopTransition(index, position),
      }[transition]
    },
  }
}

export default TransitionConfiguration
