<template>
    <footer class="partners">
        <div class="partnerLogos">
            <a href="https://www.challiance.org/"><img src="./../assets/partnerLogos/CHA_logo.png" alt="Cambridge Health Alliance Logo"></a>
            <a href="https://www.challiance.org/community/everett-health-partnership"><img src="./../assets/partnerLogos/echp-logo-no-sac-copy2.png" alt="Everett Community Health Partnership Logo"></a>
            <a href="https://www.greenrootschelsea.org/"><img src="./../assets/partnerLogos/GreenRootsLogo_flat.png" alt="Green Roots Logo"></a>
            <a href="https://rad.cat/"><img src="./../assets/partnerLogos/RAD_logo3_large---transparency.png" alt="Research Action Design Logo"></a>
            <a href="https://www.colab.mit.edu/"><img src="./../assets/partnerLogos/colab-logo.png" alt="MIT Community Innovators Lab Logo"></a>
        </div>
        <span class="partnersMessage">
            <p> <strong>{{ $t('partnersDisclaimer.SurdnaFoundation') }}</strong> {{ $t('partnersDisclaimer.Surdnacontent') }}</p>
            <p> <strong>{{ $t('partnersDisclaimer.CreativeCommonsAttribution') }}</strong> {{ $t('partnersDisclaimer.AttributionContent') }}</p>
            <a class="license" rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="./../assets/icons/cc.svg"/><img alt="Attribution" style="border-width:0" src="./../assets/icons/by.svg"/><img alt="Non-Commercial" style="border-width:0" src="./../assets/icons/nc.svg"/><img alt="Share Alike" style="border-width:0" src="./../assets/icons/sa.svg"/></a>
        </span>
    </footer>
</template>

<style scoped>
p {
    width: 80%;
    margin: 1em auto;
    text-align: left;
}
.license img {
    margin: 0.25em;
    width: 24px;
    height: 24px;
    display: inline;
}
div.partnerLogos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
}
</style>
