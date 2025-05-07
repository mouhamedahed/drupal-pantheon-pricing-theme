<?php

namespace Drupal\pricing\Controller;

use Drupal\Core\Controller\ControllerBase;

class PricingController extends ControllerBase {

  public function compare() {
    $terms = $this->entityTypeManager()
      ->getStorage('taxonomy_term')
      ->loadByProperties(['vid' => 'feature_groups']);

    return [
      '#theme' => 'pricing_comparison',
      '#groups' => $terms,
    ];
  }

}