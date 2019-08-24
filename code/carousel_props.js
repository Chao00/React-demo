<Carousel
    renderBottomCenterControls={props => <PagingDots {...props} />}
    renderCenterLeftControls={({ previousSlide }) => (
        <RoundButton
            size={RoundButton.Size.XS}
            hidden={!this.props.showNextPrevious}
            onClick={previousSlide}
            icon="sapIcon-previous"
        />
    )}
    renderCenterRightControls={({ nextSlide }) => (
        <RoundButton
            size={RoundButton.Size.XS}
            hidden={!this.props.showNextPrevious}
            onClick={nextSlide}
            icon="sapIcon-next"
        />
    )}
>
    {...slides }
</Carousel>